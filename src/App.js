import './App.css';
import React from "react";
import { Switch, Route, Link } from 'react-router-dom';
import {HomeP, CoursesP, AddNewP } from './Pages/Nav'


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={HomeP} />
      <Route exact path='/1' component={CoursesP}/>
      <Route exact path='/2' component={AddNewP} />
    </Switch>
  </main>
)
const Header = () => (
  <div>
  <nav className="navbar navbar-expand-lg navbar-light  bg-dark">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="navbar-brand" style={{color: "white"}} to="/">Code.Hub DashBoard</Link>
      </li>
      <li className="nav-item" style={{marginLeft:"800px"}} >
        <Link className="navbar-brand" style={{color:"LightGray"}} to="/1">Courses</Link>
      </li>
      <li className="nav-item">
        <Link className="navbar-brand" style={{ color:"LightGray"}} to="/2">Add New Course</Link>
      </li>
    </ul>
    </nav>
  </div>
)

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)

export default App;
