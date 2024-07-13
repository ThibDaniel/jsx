import { useEffect, useState } from "react"
import useSWR from "swr"

const fetcher = (url) => fetch(url).then((res) => res.json())
export const GitHubUser = (username) => {
/*const [user, setUser] = useState(null);
const [error, setError] = useState(null);
const [load, setLoad] = useState(false);

useEffect(() => {
    setLoad(true);
    fetch(`https://api.github.com/users/${username}`)
    .then((res) => res.json())
    .then((json) => setUser(json))
    .catch((error) => setError(error))
    .finally(() => setLoad(false))
},[username])

    return(
<div>
    {user && (
        <>
        <img src={user.avatar_url} />
					<div>{user.login}</div>
					<div>{user.name}</div>
        </>
    )}
    {error && <div>{error.message}</div>}
    {load && <div>Loading...</div>}
</div>
)*/
const {data, error} = useSWR(`https://api.github.com/users/${username}`, fetcher)  

return{
  
   user: data,
		error,
		loading: !data && !error,
  
}
}
