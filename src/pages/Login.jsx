import React from "react";
import {useSelector,useDispatch} from 'react-redux'
export default function App(props) {
	let state=useSelector(s=>s)
	let dispatch=useDispatch()
	let [ob,setob]=React.useState({email:"",password:""})


	const login=role=>{
		let users=state[role]
		// let users=state["admin"]
		// let users=state["faculty"]
		// let users=state["student"]
		let user={}
		if(users.some(x=>x.email===ob.email && x.password===ob.password))
		{
			user=users.find(x=>x.email===ob.email && x.password===ob.password)
			dispatch({type:"login",role,user})
			alert("welcome "+role)
			props.history.push("/"+role+"/index")
		}
		else
		{
			alert("failed to loggedin as "+role)

		}
	}
  return (
    	<div className="login">
    		<h3>login</h3>
    		<p>email</p>
    		<div className="line">
    			<input value={ob.email} onChange={e=>setob({...ob,email:e.target.value})} />
    			<i className="fa fa-envelope"></i>
    		</div>
    		<p>password</p>
    		<div className="line">
    			<input value={ob.password} onChange={e=>setob({...ob,password:e.target.value})} />
    			<i className="fa fa-lock"></i>
    		</div>
			<button onClick={e=>login('admin')}>admin</button>    		
			<button onClick={e=>login('faculty')}>faculty</button>    		
			<button onClick={e=>login('student')}>student</button>    		
    	</div>
  );
}
