
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
    console.log(this.taskList);
  },
  addToDOM() {
    const ProjectDiv = document.createElement('div');
    const ProjectName = document.createElement('h4');
    ProjectName.textContent = this.name;

    const ProjectContainer = document.querySelector('.content');
    ProjectDiv.appendChild(ProjectName)
    ProjectContainer.appendChild(ProjectDiv);
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