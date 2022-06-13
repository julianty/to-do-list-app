import EventHandler from "./EventHandler";
import RightArrowFile from "./chevron-right.svg";

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

    const ProjectHeader = (() => {
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
      ProjectHeader.appendChild(ProjectName);
      ProjectHeader.appendChild(DueDate);
      ProjectHeader.appendChild(Date);
      return ProjectHeader
    })();
    // Create task container
    const TasksList = this.createElement('div', 'task-list');
    Project.taskList.forEach(task => {
      const TaskContainer = this.createElement('div', 'task-container');
      const TaskMarker = new Image();
      TaskMarker.src = RightArrowFile;
      TaskMarker.addEventListener('click', e => EventHandler(e));

      TaskMarker.classList.add('task-marker');
      const TaskText = this.createElement('p', 'task');
      TaskText.contentEditable = true;
      TaskText.addEventListener('input', e => EventHandler(e));
      TaskText.textContent = task.title;

      const TaskDescription = this.createElement('p', 'task-description');
      TaskDescription.textContent = task.description;
      TaskContainer.appendChild(TaskMarker);
      TaskContainer.appendChild(TaskText);
      TaskContainer.appendChild(TaskDescription);
      TasksList.appendChild(TaskContainer);
    })

    // Appends everything together
    NewProject.appendChild(ProjectHeader);
    NewProject.appendChild(TasksList);
    ProjectContainer.appendChild(NewProject);
    return NewProject
  },

  manageEvent(event) {
    console.log(event.target.id);
  },
}

export default DOMController