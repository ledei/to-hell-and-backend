import { useState } from "react"
import SendBroadcastMsg from "./SendBroadcastMsg"

export function InputBroadcastMsg(){
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    return(
        <>
        <div className="input-broadcast-msg">
            <h3>Sänd ut nytt nödmeddelande</h3>
        {/* <label htmlFor="broadcast-title">Title</label> */}
        <input placeholder="Titel" type="text" className="broadcast-title" onChange={(e)=>setTitle(e.target.value)}/>
        {/* <label htmlFor="broadcast-content">Content</label> */}
        <input placeholder="Meddelande" type="text" className="broadcast-content" onChange={(e)=>setContent(e.target.value)}/>
        <button className="send-broadcast-btn" onClick={()=>SendBroadcastMsg(title,content)}>sänd ut</button>
        </div>
        </>
    )
}

