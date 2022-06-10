
let ProjectActions = {
  _createTask(title, description, dueDate, priority) {
    return {
      title,
      description,
      dueDate,
      priority
    }
  },
  addTask(title, description, dueDate, priority) {
    let Task = this._createTask(title, description, dueDate, priority)
    this.taskList.push(Task)
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
};


function createProject(name, tags=null) {
  let Project = Object.create(ProjectActions);
  Project.name = name;
  Project.tags = tags;
  Project.taskList = [];
  Project.status = 'incomplete';
  Project.DivContainer;
  return Project
}

export default createProject;