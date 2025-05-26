# React To-Do List App

A simple and interactive to-do list application built with React, featuring task management, filtering, editing, and smooth animations. Deployed live at https://todolistreact-2025.netlify.app/.

## Overview
This project was bootstrapped with Create React App and enhanced with @react spring/web for animations and Font Awesome for custom icons.

### Features
* Add new tasks with a text input and styled button.
* Edit existing tasks inline.
* Delete tasks from the list.
* Toggle task completion status.
* Filter tasks by "All," "Incomplete," or "Completed" using a custom dropdown with a Font Awesome caret-down icon.
* Smooth animations for buttons, dropdown, and task transitions.
* Responsive design with custom CSS.

### Technologies
* React: Frontend library for UI.
* Create React App: Boilerplate for project setup.
* @react spring/web: Physics-based animations.
* Font Awesome: Custom icons for dropdown.
* CSS: Styling in src/styles/App.css.
* Netlify: Hosting for the live deployment.

## Demo
Try the live app at https://todolistreact-2025.netlify.app/. Add, edit, delete, and filter tasks with smooth animations.

## Getting Started
### Prerequisites
* Node.js (v14 or later)
* npm (included with Node.js)

### Installation
1. Clone the repository:
   git clone https://github.com/vanessacl/todo-list-react
   cd todo-list-react

2. Install dependencies:
   npm install

3. Install additional dependencies:
   npm install @react spring/web @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome

## Available Scripts
### Development
* npm start
  Runs the app in development mode. Open http://localhost:3000 to view it in your browser. The page reloads on changes, and lint errors appear in the console.

### Testing
* npm test
  Launches the test runner in interactive watch mode. See running tests for details.

### Production
* npm run build
  Builds the app for production to the build folder, optimized and minified. See deployment for more.

### Advanced
* npm run eject
  Note: This is a one-way operation. Copies configuration files (webpack, Babel, ESLint) for full control. Use with caution.

## Usage
### Task Management
* Add: Enter a task and click "Add Task" or press Enter.
* Edit: Click "Edit," modify text, then "Save" or "Cancel."
* Delete: Click "Delete" to remove a task.
* Complete: Click "Complete" or "Undo" to toggle status.

### Filtering
* Use the dropdown to filter tasks by:
   - All
   - Incomplete
   - Completed
     
### Animations
* Hover over buttons or dropdown for opacity effects.
* Task additions/removals feature fade and slide transitions.

### Deployment
The app is deployed on Netlify. To deploy your own version:

1. Build the app:
   npm run build

2. Deploy the build folder to Netlify via:
   * Netlify CLI: netlify deploy --prod
   * Netlify web interface: Drag and drop the build folder.
   * GitHub integration: Connect your repo for automatic deployments.

See Netlify documentation for details.

## Project Structure
* src/components/Button.jsx: Reusable button with opacity animation.
* src/components/TodoList.jsx: Main component for task management.
* src/styles/App.css: Styles for buttons, dropdown, and task list.
* src/App.js: Main app component.
* src/index.js: Entry point.

## Contributing
### How to Contribute
* Fork the repository.
* Create a feature branch (git checkout -b feature/your-feature).
* Commit changes (git commit -m 'Add your feature').
* Push to the branch (git push origin feature/your-feature).
* Open a pull request.

### Guidelines
* Follow existing code style.
* Include tests for new features.
* Ensure commits are descriptive.

## Resources
### Documentation
* Create React App
* React
* @react spring/web
* Font Awesome React
* Netlify

### Additional Topics
* Code Splitting
* Bundle Size Analysis
* Progressive Web App
* Advanced Configuration
* Troubleshooting Build

## License
This project is licensed under the MIT License.

