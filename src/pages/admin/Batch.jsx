import React from "react";
import {useSelector,useDispatch} from 'react-redux'
export default function App(props) {
	let state=useSelector(s=>s)
	let dispatch=useDispatch()

	let {admin,faculty,student,course,slots,batch,fid,sid,cid,slot_id,dt}=state

	const del=id=>{
		batch=batch.filter(x=>x.id!==id)
		dispatch({type:"batch",payload:batch})
	}
	const p1=(e,x) =>{
		dispatch({type:"sid",payload:x.name})
		dispatch({type:"cid",payload:x.cid})
	}
	const p2=(e,x) =>{
		dispatch({type:"slot_id",payload:x})
	}
	const p3=(e,x) =>{
		dispatch({type:"slot_id",payload:x})
		let ob={
			fid,
			sid,
			cid,
			slot_id,
			dt,
			p:0,
			reason:"",
			remarks:"",
			id:batch.length+1
		}
		batch=[...batch,ob]
		dispatch({type:"batch",payload:batch})
	}

	const _fid=s=>{
		dispatch({type:"fid",payload:s})
	}

	const _dt=s=>{
		dispatch({type:"dt",payload:s})
	}
  return (
    	<div className="wrapper">
    		<div className="flex">
    			<div className="item1">
    				<h5>Slots {slots.length}</h5>
    				<div className="scroll">
    					{slots.map(x=>
    						<p
    						onDragOver={e=>p2(e,x.name)}
    						onDrop={e=>p3(e,x.name)}
    						className={x.name===slot_id?'active':''}
    						>{x.name}</p>
    						
    					)}
    				</div>
    			</div>
    			<div className="item1">
    				<h5>student {student.length}</h5>
    				<div className="scroll">
    					{student.map(x=>
    						<p
    						onDragStart={e=>p1(e,x)}
    						className={x.name===sid?'active':''}
    						>{x.name}</p>
    						
    					)}
    				</div>
    			</div>
    			
    			<div className="item1">
    				<h5>courses {courses.length}</h5>
    				<div className="scroll">
    					{courses.map(x=>
    						<p
    						className={x.name===cid?'active':''}
    						>{x.name}</p>
    						
    					)}
    				</div>
    			</div>
    			

    			<div className="item1">
    				<h5>faculty {faculty.length}</h5>
    				<div className="scroll">
    					{faculty.map(x=>
    						<p
    						onClick={e=>_fid(x.name)}
    						className={x.name===fid?'active':''}
    						>{x.name}</p>
    						
    					)}
    				</div>
    			</div>
    			

    			<div className="item2">
    				<input type="text" value={dt} onChange={e=>_dt(e.target.value)}/>
    				<h5>batch {batch.length}</h5>
    				<div className="scroll">
    					<table cellPadding="10" cellSpacing="0">
    						<thead>
    							<tr>
    								<th>date/time</th>
    								<th>faculty</th>
    								<th>course</th>
    								<th>student</th>
    								<th>actions</th>
    							</tr>
    						</thead>
    						<tbody>
    							{batch.map(x=>
    								<tr>
    									<td>{x.dt} / {x.slot_id}</td>
    									<td>{x.fid}</td>
    									<td>{x.sid}</td>
    									<td>
    										<button className="del" onClick={e=>del(x.id)}>
    											<i className="fa fa-trash-o"></i>
    										</button>
    									</td>
    								</tr>
    								
    							)}
    						</tbody>
    					</table>
    				</div>
    			</div>
    		</div>
    	</div>
  );
}
