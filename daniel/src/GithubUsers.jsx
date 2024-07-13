import { useState } from "react";
import { GitHubUser } from "./GitHubUser";



export const GithubUsers = (username) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [users, setUsers] = useState([]);
  
    const handleSearch = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch(`https://api.github.com/search/users?q=${searchQuery}`);
        const data = await response.json();
        setUsers(data.items);
      } catch (error) {
        console.error('Error searching users:', error);
      }
    };
  
    const handleInputChange = (e) => {
      setSearchQuery(e.target.value);
    };
  
    return (
      <div>
        <form onSubmit={handleSearch}>
          <input type="text" value={searchQuery} onChange={handleInputChange} placeholder="Enter username" />
          <button type="submit">Search</button>
        </form>
        <ul> 
          {users.map((user) => (
            <li key={user.id}>
              <GitHubUser username={user.login} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
