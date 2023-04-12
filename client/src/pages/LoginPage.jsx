
import { useState } from "react";
import Login from "../components/Login";

export function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsername = (e) => {
        setUsername(e.target.value);
        
     
      };

      const handlePassword = (e) => {
        setPassword(e.target.value);
        
     
      };

    return (

        <div className="login-page">
            <img className="first-page-logotype" src="./src/img/duck.png" alt="duck" />

            <label >Användarnamn:</label>
            <input type="text" className="username" onChange={handleUsername}/>
            <label >Lösenord:</label>
            <input type="password" className="password" onChange={handlePassword}/>
            <button onClick={()=>Login(username,password)}>Login</button>
        </div>


    )

}

export default LoginPage