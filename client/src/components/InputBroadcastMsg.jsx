import { useState } from "react"
import SendBroadcastMsg from "./SendBroadcastMsg"

export function InputBroadcastMsg(){
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    return(
        <>
        <div>
            <h3>Send a broadcast message</h3>
        <label htmlFor="broadcast-title">Title</label>
        <input type="text" className="broadcast-title" onChange={(e)=>setTitle(e.target.value)}/>
        <label htmlFor="broadcast-content">Content</label>
        <input type="text" className="broadcast-content" onChange={(e)=>setContent(e.target.value)}/>
        <button onClick={()=>SendBroadcastMsg(title,content)}>Send</button>
        </div>
        </>
    )
}

