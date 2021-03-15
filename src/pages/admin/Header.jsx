import React from "react";
import {useSelector,useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
export default function App(props) {
	let state=useSelector(s=>s)
	let dispatch=useDispatch()
  return (
    	<div className="header">
    		<div className="item">
    			<h1>Admin Panel</h1>
    		</div>
    		<div className="item">
    			<Link to="/admin/index">Home</Link>
    			<Link to="/admin/Admin">Admin</Link>
    			<Link to="/admin/Faculty">Faculty</Link>
    			<Link to="/admin/Student">Student</Link>
    			<Link to="/admin/Courses">Courses</Link>
    			<Link to="/admin/Slots">Slots</Link>
    			<Link to="/admin/Batch">Batch</Link>
    			<Link to="/admin/Planner">Planner</Link>
    			<Link to="/admin/Attendance">Attendance</Link>
    			<Link to="/admin/Chart">Chart</Link>
    			<Link to="/admin/Graph">Graph</Link>
    			<Link to="/admin/Logout">Logout</Link>
    		</div>
    		
    	</div>
  );
}
