//import { getQueriesForElement } from '@testing-library/react';
import React from 'react';
import './App.css';

function App() {
  let name = "Bilal Ahmad"
  let greeting = "";
  let cdate = new Date(2023,3,6,15);
  cdate=cdate.getHours();
  const mystyle = {};
  if(cdate>=5 && cdate<=11){
    greeting="Good Morning";
    mystyle.color = "Green";
  }
  else if (cdate>11 && cdate <= 16){
    greeting="Good Afternoon";
    mystyle.color = "Yellow";
  }
  else if(cdate>16 && cdate<= 20){
    greeting="Good Evening";
    mystyle.color = "Blue";
  }
  else{
    greeting="Good Night";
    mystyle.color = "Black";
  }
  const styling ={
    backgroundColor: "#282c34",
    display: "flex",
    alignItem: "center",
    justifyContent: "center"
  }

  return (
    <h1 style={styling}>Hello {name}, <span style={mystyle}>{greeting}</span>  </h1>
  );
}

export default App;
