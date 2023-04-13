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

          <h3>Logga in</h3>

            <p>
            {/* <label className="enter-username-label">Användarnamn:</label> */}
            <input type="text" placeholder="Ange användarnamn" className="username-input" onChange={handleUsername}/>
            </p>

            <p>
            {/* <label className="enter-password-label">Lösenord:</label> */}
            <input type="password" placeholder="Ange Lösenord" className="password-input" onChange={handlePassword}/>
            </p>

            <p className="response">{respone}</p>
            <button className="login-btn" onClick={()=>{
              handlelogin()
            }}>Logga in</button>
              <button className="create-user-btn" onClick={()=>{
              navigate('/create-user')
            }}>Skapa ny användare</button>
            
        </div>


    )

}

export default LoginPage