import React from "react";
import {Switch,Route} from "react-router-dom";
import  Header from './Header';
import  Footer from './Footer';
import  Index from './Index';
import  Admin from './Admin';
import  Faculty from './Faculty';
import  Student from './Student';
import  Courses from './Courses';
import  Slots from './Slots';
import  Batch from './Batch';
import  Planner from './Planner';
import  Attendance from './Attendance';
import  Chart from './Chart';
import  Graph from './Graph';
export default function App() {
  return (
    <div>
    	<Header/>
    	<div className="container">
    		<Switch>
    			<Route exact path="/admin/index" component={Index} />
    			<Route exact path="/admin/Admin" component={Admin} />
    			<Route exact path="/admin/Faculty" component={Faculty} />
    			<Route exact path="/admin/Student" component={Student} />
    			<Route exact path="/admin/Courses" component={Courses} />
    			<Route exact path="/admin/Slots" component={Slots} />
    			<Route exact path="/admin/Batch" component={Batch} />
    			<Route exact path="/admin/Planner" component={Planner} />
    			<Route exact path="/admin/Attendance" component={Attendance} />
    			<Route exact path="/admin/Chart" component={Chart} />
    			<Route exact path="/admin/Graph" component={Graph} />
    		</Switch>
    	</div>
    	<Footer/>
    </div>
  );
}
