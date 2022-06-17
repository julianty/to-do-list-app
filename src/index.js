import './style.css';
import generateDOM from './generateDOM';
import ProjectController from './ProjectController';
import DOMController from './DOMController';
import EventHandler from './EventHandler';
import 'date-fns';
import 'localStorage';
generateDOM();

let firstProject = ProjectController.createProject('My first project');
// let firstProject = createProject('firstProject');
firstProject.addTask('Task 1', 'dummy description', '06/05/22', 1);
// console.log(firstProject.DivContainer);
// console.log(ProjectController.projectList);
// localStorage.clear();
// ProjectController.saveData();
// ProjectController.loadData();
// firstProject.addTask('Task 2');

// let secondProject = createProject('secondProject');
// secondProject.addTask('Task 1');

// firstProject.DivContainer = DOMController.addToDOM(firstProject);
// secondProject.DivContainer = DOMController.addToDOM(secondProject);

// firstProject.setStatus('incomplete');

// const AddProjectButton = document.getElementById('add-project')
// AddProjectButton.addEventListener('click', e => EventHandler(e));

// console.log(storageAvailable('localStorage'));
// localStorage.setItem('Project', JSON.stringify(firstProject));
// const loadedProject = JSON.parse(localStorage.getItem('Project'));
// const reloadedProject = createProject(loadedProject);
// Object.setPrototypeOf(loadedProject, Object.getPrototypeOf(firstProject));
// localStorage.clear();
// firstProject.saveData();
// console.log(localStorage);
// console.log(createProject.loadData('firstProject'));
