import { useEffect, useState } from "react";
import FetchChannels from "../components/FetchChannels";

export function LandingPage(){
    const [channels, setChannels] = useState([]); 

    useEffect(()=>{
        FetchChannels().then((channels)=>{
            setChannels(channels)
        })
    },[])

    function handleChannels(e){
        console.log(e.target.value);
    }

    return(
        <>
        <h1>Användarnamn</h1>

        <article>
            <h3>Broadcast</h3>
            <div>
                <h5>Bajs Blöja</h5>
                <p>Byta bajs blöja på yves</p>
            </div>
        </article>

        <section>
            <label htmlFor="channels">Välj kanal</label>
            <select onChange={(e)=>handleChannels(e)} name="channels"  className="test">
                <option value="">Välj en kanal</option>
                {channels.map((channel)=>{
                     <option value={channel._id}>{channel.name}</option>
                })}
            </select>
        </section>
        </>
    )
}