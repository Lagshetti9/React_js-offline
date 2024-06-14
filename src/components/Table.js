import React from "react";


const Table = () => {
  return (

    <div className="react_table">
     <hr></hr>
      <h3>Table</h3>
      <table>
        <th>
          <tr>
            <td>Batch No.</td>
            <td>Name</td>
            <td>Class</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Ramesh</td>
            <td>5r</td>

          </tr>
          <tr>
            <td>3</td>
            <td>Ragu</td>
            <td>5r </td>

          </tr>

          <tr>
            <td>6</td>
            <td>Navin</td>
            <td>5r </td>
          </tr>
        </th>
      </table>
    </div>
  );
};

export default Table;
