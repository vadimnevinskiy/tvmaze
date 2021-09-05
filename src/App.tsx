import React, {Suspense} from 'react';
import './App.css';
import 'materialize-css'
// import ShowList from "./components/ShowList/ShowList";
// import Detail from "./components/Detail/Detail";
import {Route} from "react-router-dom";


const ShowList = React.lazy(() => import("./components/ShowList/ShowList"))
const Detail = React.lazy(() => import("./components/Detail/Detail"))

function App() {
    return (
        <div className="App">
            <Suspense fallback={"Загрузка"}>
                <Route exact path='/detail/:showId' render={() => <Detail/>}/>
                <Route exact path='/' render={() => <ShowList/>}/>
            </Suspense>
        </div>
    );
}

export default App;
