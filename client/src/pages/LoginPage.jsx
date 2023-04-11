export function LoginPage() {
    return (

        <section class="login-page">
            <img class="first-page-logotype" src="./src/img/duck.png" alt="duck" />

            <label for="username">Användarnamn:</label>
            <input type="text" id="username" onChange={ (e) => console.log(e.target.value)}/>
            <label for="password">Lösenord:</label>
            <input type="password" id="password" onChange={ (e) => console.log(e.target.value)}/>
            <button>Login</button>
        </section>

    )

}

export default LoginPage