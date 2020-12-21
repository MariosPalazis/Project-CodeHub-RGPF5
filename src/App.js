import './App.css';
import React from "react";
import { Switch, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Courses from './Pages/Courses';
import AddNew from './Pages/AddNew';
import NoMatch from './Pages/NoMatch';
import SingleCourse from './Pages/SingleCourse';


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/Courses' component={Courses}/>
      <Route exact path='/AddNew' component={AddNew} />
      <Route exact path="/Courses/:id" component={SingleCourse} />
      <Route component={NoMatch} />
    </Switch>
  </main>
)
const Header = () => (
  <div>
  <nav className="navbar navbar-expand-lg navbar-light  bg-dark">
    <ul className="navbar-nav" style={{display:"flex"}}>
      <li className="nav-item">
        <Link className="navbar-brand" style={{color: "white"}} to="/">Code.Hub DashBoard</Link>
      </li>
      <li><div style={{width: "60vw"}}></div></li>
      <li className="nav-item" >
        <Link className="navbar-brand" style={{color:"LightGray"}} to="/Courses">Courses</Link>
      </li>
      <li className="nav-item">
        <Link className="navbar-brand" style={{ color:"LightGray"}} to="/AddNew">Add New Course</Link>
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
