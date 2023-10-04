import React, { useRef, useState } from "react";
import "./Table.css";

const TableCellHighlighter = () => {
  const titleX = [
    { title: "a", id: "14" },
    { title: "b", id: "24" },
    { title: "c", id: "43" },
    { title: "d", id: "454" },
    { title: "ha", id: "17" },
    { title: "rb", id: "27" },
    { title: "cr", id: "35" },
    { title: "dv", id: "443" },
    { title: "ha", id: "18" }, // Change the id to be unique
    { title: "rb", id: "19" }, // Change the id to be unique
    { title: "cr", id: "20" }, // Change the id to be unique
    { title: "dv", id: "21" }, 
    // Change the id to be unique
  ];
  
  const titleY = [
    { title: "ec", id: "55" },
    { title: "fsd", id: "64" },
    { title: "gx", id: "73" },
    { title: "hx", id: "89" },
    { title: "se", id: "90" }, // Change the id to be unique
    { title: "vvf", id: "91" }, // Change the id to be unique
    { title: "3vg", id: "92" }, // Change the id to be unique
    { title: "3h", id: "93" }, // Change the id to be unique
    { title: "3e", id: "94" }, // Change the id to be unique
    { title: "3f", id: "95" }, // Change the id to be unique
    { title: "3g", id: "96" }, // Change the id to be unique
    { title: "44h", id: "97" },
    { title: "ec", id: "554" },
    { title: "fsd", id: "q64" },
    { title: "gx", id: "73" },
    { title: "hx", id: "8qs9" },
    { title: "se", id: "9e0" },  // Change the id to be unique
  ];
  
  const [tableData, setTableData] = useState(() =>
    initializeTableData(titleX, titleY)
  );
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
    // Check if the cell has a title (not in the first row or column)
    if (rowIndex > 0 && columnIndex > 0) {
      // Create a new array to hold the updated state
      const newTableData = tableData.map((row, rIndex) =>
        row.map(
          (highlighted, cIndex) => rIndex === rowIndex || cIndex === columnIndex
        )
      );
      newTableData[rowIndex][0] = false; // Clear same row's first cell
      newTableData[0][columnIndex] = false;
      // Clear the highlights for the right and bottom cells
      for (let i = rowIndex + 1; i < tableData.length; i++) {
        newTableData[i][columnIndex] = false;
      }

      for (let j = columnIndex + 1; j < tableData[0].length; j++) {
        newTableData[rowIndex][j] = false;
      }

      setTableData(newTableData);
    }

    // Get the IDs of the first cell in the same row and column
    const rowId =
      rowIndex === 0 ? titleX[columnIndex - 1]?.id : titleY[rowIndex - 1]?.id;
    const colId =
      columnIndex === 0
        ? titleY[rowIndex - 1]?.id
        : titleX[columnIndex - 1]?.id;

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
  const tableContainerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(null);
  const [startY, setStartY] = useState(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setStartY(e.clientY);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setStartX(null);
    setStartY(null);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;

    const deltaX = e.clientX - startX;
    const deltaY = e.clientY - startY;

    // Adjust scroll position based on mouse movement
    tableContainerRef.current.scrollLeft -= deltaX;
    tableContainerRef.current.scrollTop -= deltaY;

    // Update start position for the next movement
    setStartX(e.clientX);
    setStartY(e.clientY);
  };
  // Function to render the table
  const renderTable = () => {
    const numRows = titleX.length + 1; // Add 1 for the header row
    const numCols = titleY.length + 1; // Add 1 for the header column
  
    const tableRows = [];
    for (let rowIndex = 0; rowIndex < numRows; rowIndex++) {
      const rowCells = [];
      for (let columnIndex = 0; columnIndex < numCols; columnIndex++) {
        rowCells.push(
          <td
            key={columnIndex}
            onClick={() => handleCellMouseEnter(rowIndex, columnIndex)}
            onMouseLeave={handleCellMouseLeave}
            className={`${tableData[rowIndex][columnIndex] ? "highlighted " : ""}${
              rowIndex === 0 ? "first-row-cell " : ""
            }${columnIndex === 0 ? "first-col-cell " : ""}${
              rowIndex === 0 && columnIndex === 0 ? "first-cell" : ""
            }`}
          >
            {rowIndex === 0 && columnIndex === 0 ? (
              <span>{""}</span>
            ) : columnIndex === 0 && rowIndex > 0 ? (
              <span>{titleX[rowIndex - 1]?.title}</span>
            ) : rowIndex === 0 && columnIndex > 0 ? (
              <span>{titleY[columnIndex - 1]?.title}</span>
            ) : (
              // Render other content for non-header cells if needed
              // For example, you can put content like "Cell [rowIndex,columnIndex]" here
              // <span>Cell {rowIndex},{columnIndex}</span>
              null
            )}
          </td>
        );
      }
      tableRows.push(
        <tr key={rowIndex}>
          {rowCells}
        </tr>
      );
    }
  
    return (
      <div className="table-container"  ref={tableContainerRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}>
        <div className="table-scroll-x">
          <table className="table-auto border-separate border-spacing-6 overflow-scroll w-full">
            <tbody>
              {tableRows}
            </tbody>
          </table>
        </div>
      </div>
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
