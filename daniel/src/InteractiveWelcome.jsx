import { useState } from "react"

export function Welcome({name}) {
	return <p>Hello, {name}!</p>
}

export const InteractiveWelcome = () => {
    const [username, setUsername] = useState('')
    function handleUsername(event) {
      setUsername(event.target.value)
    }
    return(
        <div>
            <input name="username" value={username} onChange={handleUsername} />
            <Welcome name={name}/>
        </div>
    )
}