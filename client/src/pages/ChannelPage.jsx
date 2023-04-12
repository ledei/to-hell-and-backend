import { useState } from "react";

export function ChannelPage() {

    const [msg, setMsg] = useState("");

    const handleSendingMsg = (e) => {
        setMsg(e.target.value);
    }

    return (
        <section className="channel-page">
            <h3 className="channel-h3">*Kanalens namn*</h3>
            <div className="channel-output">
            <p className="channel-p">{ msg }</p>
            </div>

        <div className="channel-msg-board">
            <input className="channel-input" type="text" onChange={handleSendingMsg} />
            {/* <button className="channel-send-btn">SKICKA</button> */}
            <img className="duck-icon" src="./src/img/duckIcon.png" alt="duck" />
        </div>
        </section>
    )
};



export default ChannelPage;