import React , {useContext} from "react";
import { UserContext } from "../contexts/UserContext";
import User from "../contexts/User";


const ContextHook = () => {
	const value = useContext(UserContext);
	
	console.log(value);
	return(
		 <>
      		<h2>User List</h2>
	      	{
	      	value.users.map(user => (
	        	<User key={user.name} user={user} />
	      	))
	  		}
	    </>
	);
}


export default ContextHook;