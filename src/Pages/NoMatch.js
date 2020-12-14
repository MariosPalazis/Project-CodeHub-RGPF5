import React from "react";
import {Link} from "react-router-dom";

export const NoMatch = () => {
    return(
        <div>
            <h1 style={{margin:"20px", color:"red"}}>Page Not Found</h1><br/>
            <h4 style={{marginLeft:"20px"}}>Try one of the pages below:</h4><br/>
            <ul className="navbar-nav" style={{marginLeft:"20px"}}>
                <li><Link className="navbar-brand" to="/">DashBoard</Link></li>
                <li><Link className="navbar-brand" to="/Courses">Courses</Link></li>
                <li><Link className="navbar-brand" to="/AddNew">Add New Course</Link></li>
            </ul>
        </div>
    )
}
export default NoMatch;
