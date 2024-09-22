import React from 'react';
import './App.css';

function App() {
  const url = "https://smart-select-dev.s3.ap-south-1.amazonaws.com/web/JEE/JEE.xlsx";
  return (
    <div className="App">
      <table>
          <tr>
            <th>
              Exam
            </th>
            <th>
              Excel File
            </th>
          </tr>
          <tr>
            <td>JEE</td>
            <td><a href={url}>Download File</a></td>
          </tr>
      </table>
    </div>
  );
}

export default App;
