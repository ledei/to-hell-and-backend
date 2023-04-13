import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import FetchBroadcast from "../components/FetchBroadcast";
import DecodeJWT from "../components/DecodeJWT";
import { InputBroadcastMsg } from "../components/InputBroadcastMsg";


export default function BroacdcastHistroyPage(){
    
        let navigate = useNavigate()
        const [jwtRole, setJwtRole] = useState('');
        const [broadcast, setBroadcast] = useState([]); 
        const {username}  = useParams() 

        useEffect(()=>{
            const jwt = DecodeJWT(sessionStorage.getItem("authToken"))
            setJwtRole(jwt.role)
            FetchBroadcast().then((msg)=>{
                setBroadcast(msg)
            })

        })

        const handleBackBtn = () => {
            navigate(`/content/${username}`)
        }
    
    return (
        <section >
            <h3 >Broadcast</h3>
            <button className="broadcast-btn" onClick={handleBackBtn}>Back</button>
            <div className="channel-output">
           {broadcast && broadcast.map((msg, i)=>{
            return(
                <div key={i}>
                <h4>{msg.title} <small>{msg.date}</small></h4>
                <p>{msg.content}</p>
                </div>
            )
           })}
               {jwtRole === 'admin' ? (<InputBroadcastMsg/>) : null}
            </div>
        </section>
    )
}