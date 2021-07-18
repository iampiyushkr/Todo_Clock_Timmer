import Todo from "./component/Todo.jsx"
import Timmer from "./component/timmer.jsx"
import Clock from "./component/clock.jsx"
//import { useState } from 'react';
import './App.css';

function App() {
  
  // // const data = new Date()
  // // const hours = data.getUTCHours();
  // // const minut = data.getUTCMinutes();
  // //  const sec = data.getUTCSeconds();
  // var str = []
  // str.push(data)
  // console.log(data,hours,minut,sec)

  
  return (
    <div className="App">
      <Todo/>  
       <Timmer/>
       <Clock/>  
    </div>
  );
}

export default App;
