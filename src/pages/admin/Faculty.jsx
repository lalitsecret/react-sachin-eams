import React from "react";
import {useSelector,useDispatch} from 'react-redux'
export default function App(props) {
	let state=useSelector(s=>s)
	let dispatch=useDispatch()
	let a=state.faculty
	let [ob1,setob1]=React.useState({name:"",email:"",phone:"",password:"",branch:""})
	let [ob2,setob2]=React.useState({id:0,name:"",email:"",phone:"",password:"",branch:""})


	const insert=e=>{
		e.preventDefault()
		dispatch({type:"faculty",payload:[...a,{...ob1,id:a.length+1}]})
	}
	const update=e=>{
		e.preventDefault()
		a=a.map(x=>x.id===ob2.id?ob2:x)
		dispatch({type:"faculty",payload:a})
	}

	const del=id=>{
		a=a.filter(x=>x.id!==id)
		dispatch({type:"faculty",payload:a})
	}
	const edit=x=>{setob2(x)}
	

  return (
    	<div className="wrapper">
    		<form className="form" onSubmit={insert}>
    			<h3>new faculty</h3>
    			<input placeholder="name" value={ob1.name} onChange={e=>setob1({...ob1,name:e.target.value})}/>
    			<input placeholder="email" value={ob1.email} onChange={e=>setob1({...ob1,email:e.target.value})}/>
    			<input placeholder="phone" value={ob1.phone} onChange={e=>setob1({...ob1,phone:e.target.value})}/>
    			<input placeholder="password" value={ob1.password} onChange={e=>setob1({...ob1,password:e.target.value})}/>
    			<input placeholder="branch" value={ob1.branch} onChange={e=>setob1({...ob1,branch:e.target.value})}/>
    			<button>insert</button>
    		</form>
    		{ob2.id>0?<form className="form" onSubmit={update}>
    			<h3>edit faculty</h3>
    			<input placeholder="name" value={ob2.name} onChange={e=>setob2({...ob2,name:e.target.value})}/>
    			<input placeholder="email" value={ob2.email} onChange={e=>setob2({...ob2,email:e.target.value})}/>
    			<input placeholder="phone" value={ob2.phone} onChange={e=>setob2({...ob2,phone:e.target.value})}/>
    			<input placeholder="password" value={ob2.password} onChange={e=>setob2({...ob2,password:e.target.value})}/>
    			<input placeholder="branch" value={ob2.branch} onChange={e=>setob2({...ob2,branch:e.target.value})}/>
    			<button>update</button>
    		</form>
			:null}	

    		<h1>all faculty {a.length}</h1>
    		<table cellPadding="10" cellSpacing="0">
    			<thead>
    				<tr>
    					<th>id</th>
    					<th>name</th>
    					<th>email</th>
    					<th>phone</th>
    					<th>password</th>
    					<th>branch</th>
    					<th>actions</th>
    				</tr>
    			</thead>
    			<tbody>
    				{a.map(x=>
    					<tr key={x.id}>
    						<td>{x.id}</td>
    						<td>{x.name}</td>
    						<td>{x.email}</td>
    						<td>{x.phone}</td>
    						<td>{x.password}</td>
    						<td>{x.branch}</td>
    						<td>
    							<button onClick={e=>edit(x)} className="edit"><i className="fa fa-pencil"></i></button>
    							<button onClick={e=>del(x.id)} className="del"><i className="fa fa-trash-o"></i></button>
    						</td>
    					</tr>
    					
    				)}
    			</tbody>
    		</table>
    	</div>
  );
}
