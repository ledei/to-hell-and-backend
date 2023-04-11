export function LandingPage(){

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
                <option value="1">kanal1</option>
                <option value="2">kanal2</option>
                <option value="3">kanal3</option>
                <option value="4">kanal4</option>
                <option value="5">kanal5</option>
                <option value="6">kanal6</option>
            </select>
        </section>
        </>
    )
}