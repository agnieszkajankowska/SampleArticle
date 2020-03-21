import React from 'react';
import './App.css';
import {Heading} from "./components/Heading";
import {Author} from "./components/Author";
import {DateComponent} from "./components/Date";

function App() {
  return (
    <div className="App">
      <Heading value="Heading"/>
      <Author value="John Doe" />
      <DateComponent value="2019-12-13T17:00:00Z" />
    </div>
  );
}

export default App;
