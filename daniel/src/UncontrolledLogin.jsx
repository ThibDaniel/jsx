class UncontrolledLogin extends React.Component {
    handleSubmit = (event) => {
      event.preventDefault();
      
      const formData = new FormData(event.target);
  
      const username = formData.get('username');
      const password = formData.get('password');
      
      console.log('Username:', username);
      console.log('Password:', password);
  
      if (username === 'user' && password === 'pass') {
        alert('Login successful!');
      } else {
        alert('Login failed!');
      }
    };
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Login</button>
        </form>
      );
    }
  }
  
  export default UncontrolledLogin;