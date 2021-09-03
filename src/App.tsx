import React from 'react';
import './App.css';
import 'materialize-css'
import ShowList from "./components/ShowList/ShowList";

function App() {
  return (
    <div className="App">
      <h1 className="pageTitle">TvMaze</h1>
        <div className="row">
            <ShowList />
        </div>
    </div>
  );
}

export default App;
