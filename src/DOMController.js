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
    // Creates the project header
    const ProjectHeader = this.createElement('div', 'project-header');
    // Creates the title
    const ProjectName = this.createElement('h4', 'project-title');
    ProjectName.textContent = Project.name;
    ProjectName.contentEditable = true;
    ProjectName.addEventListener('input', e => EventHandler(e));
    // Creates the due date
    const DueDate = this.createElement('h6', 'due-date');
    DueDate.textContent = 'Due on: '
    const Date = this.createElement('h6', 'date');
    Date.textContent = 'click to set date';
    Date.contentEditable = true;
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
    ProjectHeader.appendChild(ProjectName);
    ProjectHeader.appendChild(DueDate);
    ProjectHeader.appendChild(Date);
    NewProject.appendChild(ProjectHeader);
    NewProject.appendChild(TaskUL);
    ProjectContainer.appendChild(NewProject);
    return NewProject
  },

  manageEvent(event) {
    console.log(event.target.id);
  },
}

export default DOMController