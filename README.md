#React To-Do List App

A simple and interactive to-do list application built with React, featuring task management, filtering, editing, and smooth animations. This project was bootstrapped with Create React App and enhanced with @react spring/web for animations and Font Awesome for custom icons.

##Features

- Add Tasks: Create new tasks with a text input and a styled "Add Task" button.
- Edit Tasks: Modify existing tasks with an inline editing interface.
- Delete Tasks: Remove tasks from the list.
- Toggle Completion: Mark tasks as complete or incomplete with a toggle button.
- Filter Tasks: Filter tasks by "All," "Incomplete," or "Completed" using a custom-styled dropdown with a Font Awesome caret-down icon.
- Animations: Smooth task transitions (fade and slide) using @react spring/web, plus opacity animations on buttons and the filter dropdown on hover.
- Responsive Design: Styled with CSS for a clean and user-friendly interface.

##Technologies

- React: Frontend library for building the UI.
- Create React App: Boilerplate for project setup.
- @react spring/web: Physics-based animations for buttons, dropdown, and task list.
- Font Awesome: Custom icons for the dropdown (caret-down).
- CSS: Custom styles in src/styles/App.css for layout and design.

##Getting Started
###Prerequisites

- Node.js (v14 or later)
- npm (included with Node.js)

###Installation

1. Clone the repository:
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name

2. Install dependencies:
   npm install

3. Install additional dependencies for animations and icons:
   npm install @react spring/web @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome

###Available Scripts
In the project directory, you can run:

- npm start
  Runs the app in development mode. Open http://localhost:3000 to view it in your browser. The page will reload when you make changes. You may also see lint errors in the console.

- npm test
  Launches the test runner in interactive watch mode. See the Create React App documentation for more information.

- npm run build
  Builds the app for production to the build folder. It bundles React in production mode and optimizes for performance. The build is minified, and filenames include hashes. Your app is ready to be deployed! See the deployment documentation for more.

- npm run eject
  Note: This is a one-way operation. Once you eject, you can’t go back!Copies configuration files and dependencies (webpack, Babel, ESLint, etc.) into your project for full control. Use this if you need to customize the build setup beyond CRA’s defaults.

##Usage

1. Add a Task: Enter a task in the input field and click "Add Task" or press Enter.
2. Filter Tasks: Use the dropdown to view all, incomplete, or completed tasks.
3. Complete Tasks: Click "Complete" to mark a task as done or "Undo" to revert.
4. Edit Tasks: Click "Edit" to modify a task’s text, then "Save" or "Cancel."
5. Delete Tasks: Click "Delete" to remove a task.
6. Animations: Hover over buttons or the filter dropdown to see opacity animations; task additions/removals include fade and slide effects.

##Project Structure
src/
├── components/
│ ├── Button.jsx # Reusable button with opacity animation
│ ├── TodoList.jsx # Main to-do list component with task management and filter
├── styles/
│ ├── App.css # Styles for buttons, dropdown, and task list
├── App.js # Main app component
├── index.js # Entry point

##Contributing
Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a feature branch (git checkout -b feature/your-feature).
3. Commit your changes (git commit -m 'Add your feature').
4. Push to the branch (git push origin feature/your-feature).
5. Open a pull request.

Please ensure your code follows the existing style and includes tests if applicable.

##Learn More

- Create React App Documentation
- React Documentation
- @react spring/web Documentation
- Font Awesome React Documentation

###Additional Resources

- Code Splitting
- Analyzing the Bundle Size
- Making a Progressive Web App
- Advanced Configuration
- Deployment
- Troubleshooting npm run build Failures

##License
This project is licensed under the MIT License.
