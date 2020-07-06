import React from 'react';
import Quiz from "./containers/Quiz/Quiz";
import {Route} from "react-router-dom";
import Result from "./components/Result/Result";

function App() {
  return (
    <div>
      <Route exact path='/' render={() => <Quiz />} />
      <Route path='/result' render={() => <Result />} />
    </div>
  );
}

export default App;
