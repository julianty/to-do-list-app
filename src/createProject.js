
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
};


function createProject(name, tags=null) {
  let Project = Object.create(ProjectActions);
  Project.name = name;
  Project.tags = tags;
  Project.taskList = [];
  return Project
}

export default createProject;