import { useEffect, useState } from "react";
import FetchChannels from "../components/FetchChannels";
import FetchBroadcast from "../components/FetchBroadcast";
import { io } from 'socket.io-client';
import { useNavigate, useParams } from "react-router-dom";
import DecodeJWT from "../components/DecodeJWT";
import { InputBroadcastMsg } from "../components/InputBroadcastMsg";

export function LandingPage(){
    let navigate = useNavigate()
    const [channels, setChannels] = useState([]); 
    const [broadcast, setBroadcast] = useState([]); 
    const [jwtRole, setJwtRole] = useState('');
    const {username}  = useParams() 


    useEffect(()=>{
        const jwt = DecodeJWT(sessionStorage.getItem("authToken"))
        setJwtRole(jwt.role)
        FetchChannels().then((channels)=>{
            setChannels(channels)
        })
        FetchBroadcast().then((msg)=>{
            let latestBroadcastMsg = msg.length - 1
            setBroadcast(msg[latestBroadcastMsg])
        })

        let socket = io("ws://127.0.0.1:3000/", {
        extraHeaders: {
          "authorization": "Bearer " + sessionStorage.getItem("authToken")
        }
      })

     socket.on("connection", resp => {
        console.log(resp);
      });

      socket.on("broadcast", msg => {
        setBroadcast(msg)
      });

      socket.on("channels", data => {
        FetchChannels().then((channels)=>{
            setChannels(channels)
        })
      });
    },[])

    

    function handleChannels(e){
        let roomId = e.target.value
        if(roomId == '') return false
        navigate(`/chatroom/${username}/${roomId}`)
    }



    return(
        <>
        <h1>{username}</h1>

      

        <article>
            <h3>Broadcast</h3>
            <div onClick={()=>console.log('hej')}>
                <h2>{broadcast.title }</h2>
                <p>{broadcast.content }</p>
                <p>{broadcast.date}</p>
            </div>
        </article>

        <section>
            <label htmlFor="channels">Välj kanal</label>
            <select onChange={(e)=>handleChannels(e)} name="channels"  className="test">
                <option value="">Välj en kanal</option>
                {channels.map((channel)=>{
                    return(
                     <option key={channel._id} value={channel._id}>{channel.name}</option>
                     )
                })}
            </select>
        </section>
        {jwtRole === 'admin' ? (<InputBroadcastMsg/>) : null}
       
        </>
    )
}