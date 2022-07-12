import EventHandler from "./EventHandler";
import RightArrowFile from "./chevron-right.svg";
import DeleteFile from "./delete.svg";
import ProjectController from "./ProjectController";

const DOMController =  {

  createElement(type, className=null) {
    const element = document.createElement(type);
    if (className) {
      element.classList.add(className)
    }
    return element
  },

  addToDOM(Project, id) {
    // Finds container
    const ProjectContainer = document.querySelector('div.project-container');
    // Creates the new container
    const NewProject = this.createElement('div', 'project');
    NewProject.classList.add('incomplete');
    NewProject.id = id;
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
      TasksList.appendChild(this.createTaskDom(task))
    })

    // Appends everything together
    NewProject.appendChild(ProjectHeader);
    NewProject.appendChild(TasksList);
    ProjectContainer.appendChild(NewProject);
    return NewProject
  },

  updateDOM() {
    //Go through each project, check if each task is listed
    // if not, add them
    //Grab a list of the projects
    const ProjectDivs = document.querySelectorAll('.project');
    // console.log(ProjectDivs);
    const TaskList = ProjectDivs[0].children[1];
    // console.log(TaskList.children);
    const listedTasks = Array.from(TaskList.children)
                              .map(child => child.textContent);
    ProjectController.projectList.forEach(project => {
      project.taskList.forEach(task => {
        let title = task.title;
        if (!listedTasks.includes(title)) {
          console.log(`add ${title} to task list`);
        };
      });
    });
  },

  appendTask(Project, Task, taskId) {
    const TaskList = Project.DivContainer.children[1];
    TaskList.appendChild(this.createTaskDom(Task, taskId))
  },

  createTaskDom(Task, taskId) {
    const TaskContainer = this.createElement('div', 'task-container');
    TaskContainer.id = taskId;
    const TaskMarker = new Image();
    TaskMarker.src = RightArrowFile;
    TaskMarker.addEventListener('click', e => EventHandler(e));

    TaskMarker.classList.add('task-marker');
    const TaskText = this.createElement('p', 'task');
    TaskText.contentEditable = true;
    TaskText.addEventListener('input', e => EventHandler(e));
    TaskText.textContent = Task.title;

    const TaskDescription = this.createElement('p', 'task-description');
    TaskDescription.textContent = Task.description;
    TaskContainer.appendChild(TaskMarker);
    TaskContainer.appendChild(TaskText);

    const DeleteMarker = new Image();
    DeleteMarker.src = DeleteFile;
    DeleteMarker.classList.add('delete-task-marker');
    DeleteMarker.addEventListener('click', e => EventHandler(e));
    TaskContainer.appendChild(DeleteMarker);
    TaskContainer.appendChild(TaskDescription);
    return TaskContainer
  }
}



export default DOMController