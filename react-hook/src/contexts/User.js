import React , {useContext} from "react";
import { UserContext } from "./UserContext";

const User = ({user}) => {
  const context = useContext(UserContext);
  console.log(context);
  return (
    <div style={{ background: user.color }}>
      <h3>{user.name}</h3>
     
      <input
        value={user.color}
        onChange={(e) => context.colorChange(user.id, e.target.value)}
      />
    </div>
  );
};

export default User;
