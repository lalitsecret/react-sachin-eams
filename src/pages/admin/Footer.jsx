import React from "react";
import {useSelector,useDispatch} from 'react-redux'
export default function App(props) {
	let state=useSelector(s=>s)
	let dispatch=useDispatch()
  return (
    	<div className="footer">
    		Admin Panel @ Sachin Yadav
    	</div>
  );
}
