import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import MemoHook from "./hooks/MemoHook";
import RefHook from "./hooks/RefHook";
import ContextHook from "./hooks/ContextHook";
import ReducerHook from "./hooks/ReducerHook";
import { UserContext } from "./contexts/UserContext";

let data = [
	{id:1,name:"Osman",color:"red"},
	{id:2,name:"Nurs",color:"blue"},

];
function App() {
	const [users , setUsers] = useState(data);
	const user2 = users[0];
	const colorChange = (id,color) => {
		//setUsers(users.map( user => user)
		console.log(users);
		setUsers(
			Object.assign(users).map( (user) => (user.id == id ? { ...user , color:color } : user) )
		);
	};
	
  return (
  	<UserContext.Provider value={{ users , colorChange , user2}}>
    	<div className="App">
	        <MemoHook/>
	        <RefHook/>	
	        <ContextHook/>
	        <ReducerHook/>
	    </div>
    </UserContext.Provider>
  );
}

export default App;
