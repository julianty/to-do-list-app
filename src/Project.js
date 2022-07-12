// Projects control their own task lists
// Projects can add and remove tasks
// Projects can edit the properties of their tasks
// Projects can alter their own statuses

import DOMController from "./DOMController";

const Project = {
  taskList: [],
  id: null,
  _createTask(title, description, dueDate, priority, id=null) {
    if (id == null) id = Date.now();
    return {
      title,
      description,
      dueDate,
      priority,
      id,
    }
  },
  addTask(title, description, dueDate, priority) {
    let Task = this._createTask(title, description, dueDate, priority)
    const taskId = this.taskList.length;
    Task.id = taskId;
    this.taskList.push(Task)
    DOMController.appendTask(this, Task, taskId);
  },
  printTasks() {
    // console.log(this.taskList);
    this.taskList.forEach(element => {
      console.log(element);
    });
  },

  setStatus(newStatus) {
    let statusPool = ['incomplete', 'in-progress', 'completed'];
    if (statusPool.indexOf(newStatus) == -1) {
      console.log(`Could not set status to ${newStatus}`);
      return
    }
    if (this.DivContainer == undefined) return
    this.DivContainer.classList.forEach(divClass => {
      if (statusPool.indexOf(divClass) !== -1) {
        this.DivContainer.classList.remove(divClass);
        this.DivContainer.classList.add(newStatus);
      }
    });
    this.status = newStatus;    
  },

  saveData() {
    // Keeps a JSON of the projects and their todos as well as their properties
    // console.log(storageAvailable('localStorage'));
    if (!storageAvailable('localStorage')) {
      console.log('localStorage not available');
      return
    } else {
      localStorage.setItem(this.name, JSON.stringify(this));
    }
  },

  loadData(projectName) {
    let Project = localStorage.getItem(projectName);
    return JSON.parse(Project)
  },
};

export default Project
// export default createProject;
// export default {createProject, ProjectActions};
// export {createProject, ProjectActions};