import React from 'react';
import axios from 'axios';

class SignIn extends React.Component {
    
    inputHandler = e => {
        this.setState({
          [e.currentTarget.name]: e.currentTarget.value
        })
      }

      submitHandler = e => {
        e.preventDefault();
          console.log('yep')
          axios.post('http://localhost:3400/api/login', this.state)
          .then(response => {
              localStorage.setItem('jwt', response.data.token);
          })
          .catch(error => {
              console.error('Error:', error)
          })
          e.currentTarget.reset();

      }

    render() {
        return (
            <form className="sign-in" onSubmit={this.submitHandler}>
                <h3>Sign In</h3>
                <input 
                type="text" 
                name="username" 
                placeholder="username"
                onChange={e => this.inputHandler(e)}
                />
                &nbsp;
                <input 
                type="password" 
                name="password" 
                placeholder="password"
                onChange={e => this.inputHandler(e)}
                />
                &nbsp;
                <button className="button submit">Submit</button>
            </form>
        )
    }
}

export default SignIn;