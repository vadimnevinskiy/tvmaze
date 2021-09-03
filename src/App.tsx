import React from 'react';
import './App.css';
import 'materialize-css'
import ShowList from "./components/ShowList";

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>

        <div className="row">
            <ShowList />
            {/*<div className="col s1">1</div>*/}
        </div>
    </div>
  );
}

export default App;
