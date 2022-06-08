import './style.css';
import generateDOM from './generateDOM';
import createProject from './createProject';

generateDOM();

const DOMController =  (() => {
  const ProjectContainer = document.querySelector('div.project-container');
  const ProjectList = [];

  function createElement(type, className=null) {
    const element = document.createElement(type);
    if (className) {
      element.classList.add(className)
    }
    return element
  }

  function listProjects() {
    ProjectList.forEach(Project => console.log(Project.name));
  }

  function addToDOM(Project) {
    ProjectList.push(Project);
    const NewProject = createElement('div', 'project');
    const ProjectName = createElement('h4', 'project-title');
    ProjectName.textContent = Project.name;
    const TaskList = createElement('ul', 'task-list');
    Project.taskList.forEach(task => {
      const TaskUL = createElement('li', 'task');
      TaskUL.textContent = task.title;
      TaskList.appendChild(TaskUL);
    })
    NewProject.appendChild(ProjectName);
    NewProject.appendChild(TaskList);
    ProjectContainer.appendChild(NewProject);
  }
  return {
    listProjects,
    addToDOM,
  }
})();


let Project = createProject('firstProject');
Project.addTask('Task 1');
Project.addTask('Task 2')
// Project.printTasks();
// Project.addToDOM();
DOMController.addToDOM(Project);
DOMController.listProjects();