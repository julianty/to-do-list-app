import ToDoLogo from './ToDoLogo.png';

export default function generateDOM() {
  function createElement(type, className=null) {
    const element = document.createElement(type);
    if (className) {
      element.classList.add(className)
    }
    return element
  }

  // Create main containers
  const Header = createElement('div', 'header');
  const Sidebar = createElement('div', 'sidebar');
  const Content = createElement('div', 'content');

  // Create first children of main containers
  const ProjectContainer = createElement('div', 'project-container');
  const LogoContainer = createElement('div', 'logo-container');

  // Add children to main containers
  Content.appendChild(ProjectContainer);
  Header.appendChild(LogoContainer);

  // Add the elements to the body
  function addToBody(elementList) {
    if (!Array.isArray(elementList)) {
      elementList = [elementList];
    }
    elementList.forEach(element => {
      document.body.appendChild(element)
    })
  }

  addToBody([Header, Sidebar, Content]);

  // Create Header
  const Logo = new Image();
  Logo.src = ToDoLogo;
  Logo.classList.add('logo');
  LogoContainer.appendChild(Logo);
  const LogoText = createElement('p', 'logo-text');
  LogoText.textContent = 'To Do List';
  LogoContainer.appendChild(LogoText);
}