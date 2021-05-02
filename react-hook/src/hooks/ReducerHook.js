import React , { useReducer } from "react";
import axios from "axios";
import {reducer} from "./reducer";
const initialState = {
	data: "",
	loading: false,
	error:""
}
const ReducerHook = () => {
	const [state,dispatch] = useReducer(reducer,initialState);
	const {data , loading, error} = state;
	const fetchDog = () => {
		dispatch({type:"FETCH_START"});
		axios.get('https://dog.ceo/api/breeds/image/random')
		.then((res) => {
			console.log(res)
			dispatch({type:"FETCH_SUCCESS",payload:res.data.message});
		})
		.catch((err) => {
			console.log("err");
			dispatch({type:"FETCH_ERROR",payload:err.data.status});
		});
	}
	return (
		<div>
			Fetch
			<button onClick={fetchDog}>Fetch Dog</button>
			{data && (
				<img src={data} style={{height:100}}/>
			)}
			{error && (
				<p style={{color:'red'}}>{error}</p>
			)}
			{loading && (
				<p style={{color:'green'}}>Yükleniyor</p>
			)}
		</div>
	);
}
export default ReducerHook;