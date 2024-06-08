import { useState } from "react";

export function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = (event) => {
      event.preventDefault(); // Prevent the default form submission behavior
  
      // Your login logic goes here
      console.log('Username:', username);
      console.log('Password:', password);
  
      // You can perform further actions like sending the data to a server
    };
  
    return (
      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    );
  }