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

firstProject.DivContainer = DOMController.addToDOM(firstProject);
secondProject.DivContainer = DOMController.addToDOM(secondProject);
DOMController.listProjects();

firstProject.setStatus('incomplete');

const AddProjectButton = document.getElementById('add-project')
AddProjectButton.addEventListener('click', e => {
  // Maybe use an event manager to control this?
  DOMController.manageEvent(e);
});