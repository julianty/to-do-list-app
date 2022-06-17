import Project from './Project'
import DOMController from './DOMController';
// The controller loads and saves the project data,
// also creates and removes the project data,
// prints a summarized list of the projects

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

const ProjectController = (() => {
  let projectList = [];
  const createProject = (name, tags=null) => {
    let NewProject = Object.create(Project);
    if (typeof(name) == 'string') {
      NewProject.name = name;
      NewProject.tags = tags;
      NewProject.taskList = [];
      NewProject.status = 'incomplete';
      NewProject.DivContainer;
    } else if (typeof(name) == 'object') {
      let loadedProject = name;
      NewProject.name = loadedProject.name;
      NewProject.tags = loadedProject.tags;
      NewProject.taskList = loadedProject.taskList;
      NewProject.status = loadedProject.status;
    }
    NewProject.DivContainer = DOMController.addToDOM(NewProject);
    projectList.push(NewProject);
    return NewProject
  };

  const saveData = () => {
  // Keeps a JSON of the projects and their todos as well as their properties
  // console.log(storageAvailable('localStorage'));
  if (!storageAvailable('localStorage')) {
    console.log('localStorage not available');
    return
  } else {
    localStorage.setItem('projectList', JSON.stringify(projectList));
  }
  };

  const loadData = (projectName) => {
    projectList = localStorage.getItem('projectList');
    projectList = JSON.parse(projectList);
  };

  return {
    projectList,
    createProject,
    saveData,
    loadData,
  };
})();

export default ProjectController;
// export default createProject;
// export default {createProject, ProjectActions};
// export {createProject, ProjectActions};