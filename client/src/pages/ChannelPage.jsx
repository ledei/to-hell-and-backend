import { useEffect, useState } from "react";
import duckImg from "../img/duckling.svg"
import { useNavigate, useParams } from "react-router-dom";
import FetchChatRoom from "../components/FetchChatRoom";
import SendMsg from "../components/SendMsg";
import { io } from "socket.io-client";
import DeleteChannel from "../components/DeleteChannel";
import DecodeJWT from "../components/DecodeJWT";
export function ChannelPage() {
    let navigate = useNavigate()

    const {id}  = useParams() 
    const [msg, setMsg] = useState("");
    const [roomOwner, setRoomOwner] = useState();
    const [username, setUsername] = useState('');
    const [jwtRole, setJwtRole] = useState('');
    const [room, setRoom] = useState();

    useEffect(()=>{
        const jwt = DecodeJWT(sessionStorage.getItem("authToken"))
        setUsername(jwt.username)
        setJwtRole(jwt.role)
        FetchChatRoom(id).then((channel)=>{
            setRoom(channel)
            setRoomOwner(channel.owner)
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

    const handleBackBtn = () => {
        navigate(`/content/${username}`)
    }

    const handleDelBtn = () => {
        if(username === roomOwner || jwtRole === 'admin'){
            DeleteChannel(id)
        navigate(`/content/${username}`)
        }else{
            return false
        }
    }
    return (
        <section className="channel-page">
        <p>Inloggad som</p>
        <h2 className="landing-page-h2">{username}</h2>
        <div className="landing-page-header">
            {username === roomOwner || jwtRole === 'admin' ? (<button className="channel-delete-btn" onClick={handleDelBtn}>Ta bort kanal</button>): null}
            <button className="channel-back-btn" onClick={handleBackBtn}>Tillbaka</button>
        </div>
            <h3 className="channel-h3">{room && room.name}</h3>
            <div className="channel-output">
           {room && room.msg.map((msg, i)=>{
            return(
                <div className="channel-msg-frame" key={i}>
                <h4 className="channel-userName">{msg.author} <small>{msg.sent}</small></h4>
                <p className="channel-p">{msg.content}</p>
                </div>
            )
           })}
            </div>

        <div className="channel-msg-board">
            <input className="channel-input" type="text" onChange={handleMsg} />
            {/* <button className="channel-send-btn" onClick={()=>handleSendMsg(id,msg)}>SKICKA</button> */}
            <img className="duck-btn" onClick={()=>handleSendMsg(id,msg)} src={duckImg} alt="duck" />
        </div>
        </section>
    )
};



export default ChannelPage;