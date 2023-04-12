import { useEffect, useState } from "react";
import duckImg from "../img/duckIcon.png"
import { useNavigate, useParams } from "react-router-dom";
import FetchChatRoom from "../components/FetchChatRoom";
export function ChannelPage() {
    const {id}  = useParams() 
    const [msg, setMsg] = useState("");
    const [room, setRoom] = useState();

    useEffect(()=>{
        FetchChatRoom(id).then((channel)=>{
            setRoom(channel)
        })

        
    },[])

    

    const handleSendingMsg = (e) => {
        setMsg(e.target.value);
    }

    return (
        <section className="channel-page">
            <h3 className="channel-h3">{room && room.name}</h3>
            <div className="channel-output">
           {room && room.msg.map((msg, i)=>{
            return(
                <div key={i}>
                <h6>{msg.author} <small>{msg.date}</small></h6>
                <p>{msg.content}</p>
                </div>
            )
           })}
            </div>

        <div className="channel-msg-board">
            <input className="channel-input" type="text"  />
            {/* <button className="channel-send-btn">SKICKA</button> */}
            <img className="duck-icon" src={duckImg} alt="duck" />
        </div>
        </section>
    )
};



export default ChannelPage;