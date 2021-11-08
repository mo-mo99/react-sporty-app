import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import ExercisesPage from './components/pages/ExercisesPage';
import ItemPage from './components/pages/ItemPage';
import RegisterPage from './components/pages/RegisterPage';
import ProfilePage from './components/pages/ProfilePage';
import DayExer from './components/pages/DayExer';
import Description from './components/pages/Description';


function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/exercises" component={ExercisesPage}/>
        <Route path="/items/:id" component={ItemPage}/>
        <Route path="/Register" component={RegisterPage}/>
        <Route path="/profile" component={ProfilePage}/>
        <Route path="/exer/:day" component={DayExer}/>
        <Route path="/Description/:id" component={Description}/>
      </Switch>
      </Router>
  );
}

export default App;
