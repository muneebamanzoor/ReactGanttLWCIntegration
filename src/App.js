// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from "react";
import { Gantt } from "wx-react-gantt";
import { Willow } from "wx-react-gantt"; 


function App() {
  const tasks = [
    {
      id: 1,
      text: "Task 1",
      start: new Date(2024, 0, 1),
      end: new Date(2024, 0, 5),
      duration: 4,
      progress: 50,
      type: "task",
    },
    {
      id: 2,
      text: "Task 2",
      start: new Date(2024, 0, 6),
      end: new Date(2024, 0, 10),
      duration: 4,
      progress: 30,
      type: "task",
    },
  ];

  const links = [
    { id: 1, source: 1, target: 2, type: "e2e" },
  ];

  const scales = [
    { unit: "month", step: 1, format: "MMMM yyyy" },
    { unit: "day", step: 1, format: "d" },
  ];

  // Render the Gantt chart with a theme
  return (
    <Willow>
      <Gantt tasks={tasks} links={links} scales={scales} />
    </Willow>
  );
}

export default App;

