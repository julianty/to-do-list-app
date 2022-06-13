import EventHandler from "./EventHandler";

const DOMController =  {

  createElement(type, className=null) {
    const element = document.createElement(type);
    if (className) {
      element.classList.add(className)
    }
    return element
  },

  addToDOM(Project) {
    // Finds container
    const ProjectContainer = document.querySelector('div.project-container');
    // Creates the new container
    const NewProject = this.createElement('div', 'project');
    NewProject.classList.add('incomplete');
    // Creates the title
    const ProjectName = this.createElement('h4', 'project-title');
    ProjectName.textContent = Project.name;
    ProjectName.contentEditable = true;
    ProjectName.addEventListener('input', e => EventHandler(e));
    // Generates the task list
    const TaskUL = this.createElement('ul', 'task-list');
    Project.taskList.forEach(task => {
      const TaskItem = this.createElement('li', 'task');
      const TaskText = this.createElement('span', 'task');
      TaskText.contentEditable = true;
      TaskText.addEventListener('input', e => EventHandler(e));
      TaskText.textContent = task.title;
      // TaskItem.textContent = task.title;
      TaskItem.appendChild(TaskText);
      TaskUL.appendChild(TaskItem);
    })

    // Appends everything together
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