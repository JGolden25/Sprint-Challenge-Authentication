import React from 'react';

const Joke = props => {
        return (
            <section>
                <div className="setup">{props.setup}</div>
                <div className="punchline"><em>{props.punchline}</em></div>
                <br />
            </section>
        )
    }

export default Joke;