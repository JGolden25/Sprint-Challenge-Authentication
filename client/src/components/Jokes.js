import React from 'react';
import Joke from './Joke';
import axios from 'axios';

class Jokes extends React.Component {

    state = {
        jokes: []
    };

    componentDidMount() {
        const token = localStorage.getItem('jwt');

        axios.get('http://localhost:3400/api/jokes', { headers: {Authorization: token} })
        .then(response => {
            if (response.data) {
                this.setState({ jokes: response.data })
            } else {
                console.log(response)
            }
            
        })
        .catch(error => console.error('Error', error));
    }
    

    render() {
        return (
            <section>
                <h3>Jokes</h3>
                {this.state.jokes.map((joke, index) => <Joke key={index} setup={joke.setup} punchline={joke.punchline} />)}
            </section>
        )
    }
}

export default Jokes;