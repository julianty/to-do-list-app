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
    const ProjectName = this.createElement('h4', 'project-title');
    ProjectName.textContent = Project.name;
    const TaskList = this.createElement('ul', 'task-list');
    Project.taskList.forEach(task => {
      const TaskUL = this.createElement('li', 'task');
      TaskUL.textContent = task.title;
      TaskList.appendChild(TaskUL);
    })
    NewProject.appendChild(ProjectName);
    NewProject.appendChild(TaskList);
    ProjectContainer.appendChild(NewProject);
  }
}

export default DOMController