import { useState } from "react";
import CreateChannel from "../components/CreateChannel";
import { useNavigate, useParams } from "react-router-dom";

function CreateChannelPage(){
    let navigate = useNavigate()
    const {username}  = useParams() 
    const [channelName, setChannelName] = useState('');

    const handleCreateChannel = async () =>{
        const res = await CreateChannel(channelName)
        if(res.status != 201) return false
        navigate(`/content/${username}`)

    }
    return(
        <div className="create-channel-container">
        <img className="landing-page-logotype" src="../src/img/duck.png" alt="duck" />
        <p>Inloggad som</p>
        <h2 className="landing-page-h3">{username}</h2>
        <p>
            <label>Välj namn på kanal:</label>
            <input className="create-channel-input" type="text" onChange={(e)=>setChannelName(e.target.value)}/>
        </p>
        <button className="create-channel-btn" onClick={handleCreateChannel}>Create Channel</button>
        </div>
    )
}

export default CreateChannelPage