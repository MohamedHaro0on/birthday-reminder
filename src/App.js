import  './App.css';

import data from "./data";
import BirthDayList from "./BirthDayList.jsx";
import { useState } from 'react';

const App = () =>{
  const [List , SetList] = useState(data);

  const CLickHandler = () =>{
    SetList([]);
  }
  return (
    <main className = "Container">
      <section className = "Card">
        <h1>{`${List.length}  Birthdays today !!`}</h1>
        <BirthDayList data = {List}/>
        <button className = "Button" onClick ={CLickHandler}> Claer All </button>
      </section>
    </main>
  );
}

export default App;
