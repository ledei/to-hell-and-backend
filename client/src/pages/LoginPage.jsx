import { useState } from "react";
import Login from "../components/Login";
import { useNavigate } from "react-router-dom";



export function LoginPage() {
  let navigate = useNavigate()
  
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [respone, setResponse] = useState("");

    const handlelogin = async () => {
     const res = await Login(username,password)
     setResponse(res)
     if(res != 200) return false
      navigate(`/content/${username}`)
    
    };

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
            <button onClick={()=>{
              handlelogin()
            }}>Login</button>
            <p>{respone}</p>
        </div>


    )

}

export default LoginPage