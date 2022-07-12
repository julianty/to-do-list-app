import './style.css';
import generateDOM from './generateDOM';
import ProjectController from './ProjectController';
import DOMController from './DOMController';
import EventHandler from './EventHandler';
import 'date-fns';
import 'localStorage';
generateDOM();

let firstProject = ProjectController.createProject('My first project');
firstProject.addTask('Task 1', 'dummy description', '06/05/22', 1);
firstProject.addTask('Task 2', 'dummy description2', '07/05/22', 1);