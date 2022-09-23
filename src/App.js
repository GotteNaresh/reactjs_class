import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import ClassA from './components/ClassA';
/* import User from './components/User'; */
import ExportDiff, {A, B} from './components/ExportDiff';



const App = () => {
  const name = 'Naresh';
  const userText = <h2>Hello</h2>;
  //name = 'ramesh';
  const [name1, setName] = useState(name);
  const [currTimer, setCurrTimer] = useState(new Date());
  const handleClick = () => setName('ramesh');
  useEffect(() => {
    //setName('Suresh');
    setInterval(setCurrTimer(new Date()), 1000);
  }, [currTimer])
  
  return (
    <div className="App">
      {name1} - {userText}
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
      <button onClick={handleClick}>Change Name</button>
      <ClassA></ClassA>
      {/* <User></User> */}
      <A />
      <B />
      <ExportDiff></ExportDiff>
    </div>
  );
}

export default App;
