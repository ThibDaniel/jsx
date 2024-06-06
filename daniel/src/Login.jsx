import { useState } from "react"

export const Login = () => {
    const [login, setLogin] = useState('')
    function handleLogin(e) {
        setLogin(e.target.value)
    }
    return(
        <div>
            <input name="username" type="text" onChange={handleLogin} />
            <input name="password" type="password" onChange={handleLogin}/>
            <input name="remember" type="checkbox" onChange={handleLogin}/>
        </div>
    )
}