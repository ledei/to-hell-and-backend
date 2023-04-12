export function CreateUser() {

    return (

        <div className="create-user-page">
            <img className="first-page-logotype" src="./src/img/duck.png" alt="duck" />
        
        <h3>Skapa ny användare</h3>

            <label className="create-user-label">Välj användarnamn:</label>
            <input type="text" className="create-user-input"/>
            <label className="create-password-label">Välj lösenord:</label>
            <input type="password" className="create-password-input" />
            <button className="new-user-btn">Skapa ny användare</button>
        </div>

    )

}

export default CreateUser