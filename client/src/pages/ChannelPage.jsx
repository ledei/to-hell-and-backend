import { useEffect, useState } from "react";
import duckImg from "../img/duckIcon.png"
import { useNavigate, useParams } from "react-router-dom";
import FetchChatRoom from "../components/FetchChatRoom";
import SendMsg from "../components/SendMsg";
import { io } from "socket.io-client";
export function ChannelPage() {
    const {id}  = useParams() 
    const [msg, setMsg] = useState("");
    const [room, setRoom] = useState();

    useEffect(()=>{
        FetchChatRoom(id).then((channel)=>{
            setRoom(channel)
        })
        let socket = io("ws://127.0.0.1:3000/", {
            extraHeaders: {
              "authorization": "Bearer " + sessionStorage.getItem("authToken")
            }
          })

          socket.emit('join-room',id)
          socket.on('recive-msg',()=>{
            FetchChatRoom(id).then((channel)=>{
                setRoom(channel)
            })
          })
        
    },[])

    

    const handleMsg = (e) => {
        setMsg(e.target.value);
    }

    const handleSendMsg = (id,msg) => {
        SendMsg(id,msg)
    }

    return (
        <section className="channel-page">
            <h3 className="channel-h3">{room && room.name}</h3>
            <div className="channel-output">
           {room && room.msg.map((msg, i)=>{
            return(
                <div key={i}>
                <h4>{msg.author} <small>{msg.sent}</small></h4>
                <p>{msg.content}</p>
                </div>
            )
           })}
            </div>

        <div className="channel-msg-board">
            <input className="channel-input" type="text" onChange={handleMsg} />
            <button className="channel-send-btn" onClick={()=>handleSendMsg(id,msg)}>SKICKA</button>
            <img className="duck-icon" src={duckImg} alt="duck" />
        </div>
        </section>
    )
};



export default ChannelPage;