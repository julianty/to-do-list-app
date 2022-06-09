import './style.css';
import generateDOM from './generateDOM';
import createProject from './createProject';
import DOMController from './DOMController';

generateDOM();


let firstProject = createProject('firstProject');
firstProject.addTask('Task 1');
firstProject.addTask('Task 2');

let secondProject = createProject('secondProject');
secondProject.addTask('Task 1');

DOMController.addToDOM(firstProject);
DOMController.addToDOM(secondProject);
DOMController.listProjects();