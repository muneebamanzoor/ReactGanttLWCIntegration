// import React from "react";
// import { Timeline } from "react-gantt-timeline";

// const GanttChart = () => {
//   const data = [
//     {
//       id: "1",
//       start: new Date("2025-01-10"),
//       end: new Date("2025-01-20"),
//       name: "Deliverable 1",
//       owner: "Owner 1",
//       color: "blue" // Optional: Add a color to distinguish tasks
//     },
//     {
//       id: "2",
//       start: new Date("2025-01-15"),
//       end: new Date("2025-01-25"),
//       name: "Deliverable 2",
//       owner: "Owner 2",
//       color: "green"
//     }
//   ];

//   // Map the data to match the `react-gantt-timeline` format
//   const tasks = data.map((task) => ({
//     id: task.id,
//     start: task.start,
//     end: task.end,
//     name: `${task.name} (Owner: ${task.owner})`,
//     color: task.color
//   }));
//   return (
//     <div style={{ width: "100%", height: "500px" }}>
//       <Timeline data={tasks} />
//     </div>
//   );
// };

// export default GanttChart;

import React from 'react';
import { Chart } from 'react-google-charts';

const GanttChart = () => {
  // Helper function to calculate duration in days
  const calculateDuration = (start, end) => {
    const timeDiff = end - start; // Get the time difference in milliseconds
    return Math.floor(timeDiff / (1000 * 3600 * 24)); // Convert milliseconds to days
  };

  const data = [
    ['Task ID', 'Task Name', 'Start Date', 'End Date', 'Duration', 'Percent Complete', 'Dependencies'],
    ['1', 'Deliverable 1', new Date(2025, 0, 10), new Date(2025, 0, 20), calculateDuration(new Date(2025, 0, 10), new Date(2025, 0, 20)), 100, null],
    ['2', 'Deliverable 2', new Date(2025, 0, 15), new Date(2025, 0, 25), calculateDuration(new Date(2025, 0, 15), new Date(2025, 0, 25)), 80, '1'],
  ];

  const options = {
    height: 500,
    gantt: {
      criticalPathEnabled: true,
      arrowLength: 3,
      percentEnabled: true,
      labelStyle: {
        fontName: 'Arial',
        fontSize: 12,
        color: '#000',
      },
    },
  };

  return (
    <div style={{ width: '100%', height: '500px' }}>
      <Chart
        chartType="Gantt"
        data={data}
        options={options}
        width="100%"
        height="500px"
      />
    </div>
  );
};

export default GanttChart;
