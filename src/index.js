import './style.css';
import generateDOM from './generateDOM';
import createProject from './createProject';
import DOMController from './DOMController';

generateDOM();


let Project = createProject('firstProject');
Project.addTask('Task 1');
Project.addTask('Task 2')
DOMController.addToDOM(Project);
DOMController.listProjects();