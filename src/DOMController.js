const DOMController =  {
  ProjectList: [],

  createElement(type, className=null) {
    const element = document.createElement(type);
    if (className) {
      element.classList.add(className)
    }
    return element
  },

  listProjects() {
    this.ProjectList.forEach(Project => console.log(Project.name));
  },

  addToDOM(Project) {
    const ProjectContainer = document.querySelector('div.project-container');
    this.ProjectList.push(Project);
    const NewProject = this.createElement('div', 'project');
    NewProject.classList.add('incomplete');
    const ProjectName = this.createElement('h4', 'project-title');
    ProjectName.textContent = Project.name;
    const TaskUL = this.createElement('ul', 'task-list');
    Project.taskList.forEach(task => {
      const TaskItem = this.createElement('li', 'task');
      const TaskText = this.createElement('span', 'task');
      TaskText.textContent = task.title;
      // TaskItem.textContent = task.title;
      TaskItem.appendChild(TaskText);
      TaskUL.appendChild(TaskItem);
    })
    NewProject.appendChild(ProjectName);
    NewProject.appendChild(TaskUL);
    ProjectContainer.appendChild(NewProject);
    return NewProject
  },

  manageEvent(event) {
    console.log(event.target.id);
  },
}

export default DOMController