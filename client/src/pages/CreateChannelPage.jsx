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
        <>
        <p>
            <label>Name your channel</label>
            <input type="text" onChange={(e)=>setChannelName(e.target.value)}/>
        </p>
        <button onClick={handleCreateChannel}>Create Channel</button>
        </>
    )
}

export default CreateChannelPage