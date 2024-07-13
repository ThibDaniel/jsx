import { useParams } from "react-router-dom"

export const ShowGitHubUser = () => {
    const {username} = useParams
    return <GithubUser username={username} />;
}