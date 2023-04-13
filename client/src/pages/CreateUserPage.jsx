import { useState } from "react"
import { useNavigate } from "react-router-dom";
import CreateUser from "../components/CreateUser";

export function CreateUserPage() {

    let navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [password, setPassword] = useState('');


    const handleCreateUser = async () =>{
       const res = await CreateUser(username, firstname, lastname, password);

       console.log(res)

       if(res != 201) return false
       navigate(`/content/${username}`)

    }


    return (

        <div className="create-user-page">
            <img className="first-page-logotype" src="./src/img/duck.png" alt="duck" />
        
        <h3>Skapa ny användare</h3>

            <p><label className="create-user-label">Välj användarnamn:</label>
            <input onChange={(e) => setUsername(e.target.value)} type="text" className="create-user-input"/>
            </p>

            <p>  
            <label className="firstname-label">Förnamn:</label>
            <input onChange={(e) => setFirstname(e.target.value)}type="text" className="create-user-input"/>
            </p>

            <p>
            <label className="lastname-label">Efternamn:</label>
            <input onChange={(e) => setLastname(e.target.value)}type="text" className="create-user-input"/>
            </p>

            <p>
            <label className="create-password-label">Välj lösenord:</label>
            <input onChange={(e) => setPassword(e.target.value)}type="password" className="create-password-input" />
            </p>

            <button onClick={handleCreateUser} className="new-user-btn">Skapa ny användare</button>
        </div>

    )

}

export default CreateUserPage