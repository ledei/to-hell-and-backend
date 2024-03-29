import { useEffect, useState } from "react";
import FetchChannels from "../components/FetchChannels";
import FetchBroadcast from "../components/FetchBroadcast";
import { io } from 'socket.io-client';
import { useNavigate, useParams } from "react-router-dom";


export function LandingPage(){
    let navigate = useNavigate()
    const [channels, setChannels] = useState([]); 
    const [broadcast, setBroadcast] = useState([]); 
    const {username}  = useParams() 


    useEffect(()=>{
    
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

      socket.on("channels", ()=> {
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

    const createChannel=()=>{
        navigate(`/channel/${username}`)
    }

    const seeBroadcastHistory=()=>{
        navigate(`/broadcast/${username}`)
    }



    return(
        <div className="landing-page-container">
        <img className="landing-page-logotype" src="../src/img/duck.png" alt="duck" />

        <p>Inloggad som</p>
        <h2 className="landing-page-h3">{username}</h2>

        <article className="landing-page-broadcast-container">
            {/* <h3>Broadcast</h3> */}
            <div className="landing-page-broadcast" onClick={seeBroadcastHistory}>
                <h2>{broadcast == undefined ? 'no msg': broadcast.title }</h2>
                <p>{broadcast == undefined ? 'no msg':broadcast.content }</p>
                <p>{broadcast == undefined ? null:broadcast.date}</p>
            </div>
        </article>

        <section className="landing-page-channel">
            <h4>Fast i trafiken?</h4>
            <label htmlFor="channels">Fördriv tiden i någon av våra chattkanaler</label>
            <select onChange={(e)=>handleChannels(e)} name="channels"  className="test">
                <option value="">Välj en kanal</option>
                {channels.map((channel)=>{
                    return(
                     <option key={channel._id} value={channel._id}>{channel.name}</option>
                     )
                })}
            </select>
            <button className="create-channel-link" onClick={createChannel}>Skapa ny kanal</button>
        </section>
       
       
        </div>
    )
}