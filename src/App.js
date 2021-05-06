import React from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';

function App(props) {

  return (
    <div className="App">
      <Accordion title="Lorem ipsum dolor" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      <Accordion title="Lorem ipsum dolor" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      <Accordion title="Lorem ipsum dolor" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
    </div>
  );
}

export default App;
