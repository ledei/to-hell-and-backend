import { useEffect, useState } from "react";
import FetchChannels from "../components/FetchChannels";
import FetchBroadcast from "../components/FetchBroadcast";
import { io } from 'socket.io-client';

export function LandingPage(){
    const [channels, setChannels] = useState([]); 
    const [broadcast, setBroadcast] = useState([]); 


    useEffect(()=>{
        
        FetchChannels().then((channels)=>{
            setChannels(channels)
        })
        // FetchBroadcast().then((msg)=>{
        //     let latestBroadcastMsg = msg.length - 1
        //     setBroadcast(msg[latestBroadcastMsg])
        // })

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
    },[])

    
    


    function handleChannels(e){
        let roomId = e.target.value
        console.log(roomId);
    }



    return(
        <>
        <h1>Användarnamn</h1>

      

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
       
        </>
    )
}