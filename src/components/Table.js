import React, { useState } from 'react';
import './Table.css';

const TableCellHighlighter = () => {
  const titleX = [
    { title: "a", id: "1" },
    { title: "b", id: "2" },
    { title: "c", id: "3" },
    { title: "d", id: "4" },
  ];
  const titleY = [
    { title: "e", id: "5" },
    { title: "f", id: "6" },
    { title: "g", id: "7" },
    { title: "h", id: "8" },
  ];
  const [tableData, setTableData] = useState(() => initializeTableData(titleX, titleY));
  function initializeTableData(titleX, titleY) {
    const numRows = titleX.length + 1;
    const numCols = titleY.length + 1;
    const initialData = [];
  
    // Initialize all cells as false (not highlighted)
    for (let i = 0; i < numRows; i++) {
      const row = [];
      for (let j = 0; j < numCols; j++) {
        row.push(false);
      }
      initialData.push(row);
    }
  
    return initialData;
  }
  
  // // Initialize the state with a 2D array to track highlighted cells
  // const [tableData, setTableData] = useState(() => {
  //   const numRows = titleX.length + 1;
  //   const numCols = titleY.length + 1;
  //   const initialData = [];

  //   // Initialize all cells as false (not highlighted)
  //   for (let i = 0; i < numRows; i++) {
  //     const row = [];
  //     for (let j = 0; j < numCols; j++) {
  //       row.push(false);
  //     }
  //     initialData.push(row);
  //   }

  //   return initialData;
  // });

  // Initialize state to store the IDs of the first cell in the same row and column
  const [firstCellRowId, setFirstCellRowId] = useState(null);
  const [firstCellColId, setFirstCellColId] = useState(null);

  // Function to handle mouse enter event for a cell
  const handleCellMouseEnter = (rowIndex, columnIndex) => {
    // Create a new array to hold the updated state
    const newTableData = tableData.map((row, rIndex) =>
      row.map((highlighted, cIndex) => rIndex === rowIndex || cIndex === columnIndex)
    );

    // Clear the highlights for the right and bottom cells
    for (let i = rowIndex + 1; i < tableData.length; i++) {
      newTableData[i][columnIndex] = false;
    }

    for (let j = columnIndex + 1; j < tableData[0].length; j++) {
      newTableData[rowIndex][j] = false;
    }

    setTableData(newTableData);

    // Get the IDs of the first cell in the same row and column
    const rowId = rowIndex === 0 ? titleX[columnIndex - 1]?.id : titleY[rowIndex - 1]?.id;
    console.log("rowid",rowId);
    console.log("---------",titleX[columnIndex - 1]?.id)
    console.log("........",titleY[rowIndex - 1]?.id)
    const colId = columnIndex === 0 ? titleY[rowIndex - 1]?.id : titleX[columnIndex - 1]?.id;

    setFirstCellRowId(rowId);
    setFirstCellColId(colId);
  };

  // Function to handle mouse leave event for a cell
  const handleCellMouseLeave = () => {
    // Clear all highlights by resetting the state
    setTableData(tableData.map((row) => row.map(() => false)));
    setFirstCellRowId(null);
    setFirstCellColId(null);
  };

  // Function to render the table
  const renderTable = () => {
    return (
      <table>
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((highlighted, columnIndex) => (
                <td
                  key={columnIndex}
                  onClick={() => handleCellMouseEnter(rowIndex, columnIndex)}
                  onMouseLeave={handleCellMouseLeave}
                  className={highlighted ? 'highlighted' : ''}
                >
                  {rowIndex === 0 && columnIndex === 0 ? (
                    <span>{""}</span>
                  ) : columnIndex === 0 && rowIndex > 0 ? (
                    <span>{titleY[rowIndex - 1].title}</span>
                  ) : rowIndex === 0 && columnIndex > 0 ? (
                    <span>{titleX[columnIndex - 1].title}</span>
                  ) : (
                    // Render other content for non-header cells if needed
                    // For example, you can put content like "Cell [rowIndex,columnIndex]" here
                    // <span>Cell {rowIndex},{columnIndex}</span>
                    null
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      {renderTable()}
      {firstCellRowId && <div>First Cell in Row Id: {firstCellRowId}</div>}
      {firstCellColId && <div>First Cell in Column Id: {firstCellColId}</div>}
    </div>
  );
};

export default TableCellHighlighter;