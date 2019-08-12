import React from 'react';
import { BrowserRouter, Route,Link,Switch } from 'react-router-dom';
import TaskOne from '../TaskOne/TaskOne.react';
import TaskTwo from '../TaskTwo/TaskTwo.react';
import TaskThree from '../TaskThree/TaskThree.react';
import TaskFour from '../TaskFour/TaskFour.react';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <h2>Illia's test tasks</h2>
        <h4>Please choose one:</h4>
      </div>
      <ul className="navMenu">
        <li><Link to={'taskOne'}>Task 1</Link></li>
        <li><Link to={'taskTwo'}>Task 2</Link></li>
        <li><Link to={'taskThree'}>Task 3</Link></li>
        <li><Link to={'taskFour'}>Task 4</Link></li>
      </ul>
      <Switch>
        <Route path='/taskOne' component={TaskOne}/>
        <Route path='/taskTwo' component={TaskTwo}/>
        <Route path='/taskThree' component={TaskThree}/>
        <Route path='/taskFour' component={TaskFour}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
