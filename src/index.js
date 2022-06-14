import './style.css';
import generateDOM from './generateDOM';
import createProject from './createProject';
import DOMController from './DOMController';
import EventHandler from './EventHandler';
import 'date-fns';
import 'localStorage';
generateDOM();


let firstProject = createProject('firstProject');
firstProject.addTask('Task 1', 'dummy description', '06/05/22', 1);
firstProject.addTask('Task 2');

let secondProject = createProject('secondProject');
secondProject.addTask('Task 1');

firstProject.DivContainer = DOMController.addToDOM(firstProject);
secondProject.DivContainer = DOMController.addToDOM(secondProject);

firstProject.setStatus('incomplete');

const AddProjectButton = document.getElementById('add-project')
// AddProjectButton.addEventListener('click', e => EventHandler(e));

function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

console.log(storageAvailable('localStorage'));
localStorage.setItem('testItem', new Date(2022, 05, 14));
console.log(localStorage);