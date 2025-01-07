import React from "react";
import { GanttComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';

const GanttChart = ({ data }) => {
  return (
    <GanttComponent
      dataSource={data}
      taskFields={{
        id: 'id',
        name: 'name',
        startDate: 'startDate',
        endDate: 'endDate',
        owner: 'owner',
      }}
      height="450px"
    >
      <ColumnsDirective>
        <ColumnDirective field="name" headerText="Deliverable" width="150" />
        <ColumnDirective field="startDate" headerText="Start Date" width="150" />
        <ColumnDirective field="endDate" headerText="Due Date" width="150" />
        <ColumnDirective field="owner" headerText="Owner" width="150" />
      </ColumnsDirective>
    </GanttComponent>
  );
};

export default GanttChart;
