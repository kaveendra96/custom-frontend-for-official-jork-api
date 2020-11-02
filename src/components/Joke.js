import React from 'react'

const Joke = ({joke}) =>{
    return(
        <div className="m-4">
            <div className="alert alert-success"><h4>{joke.setup}</h4></div>
            <em>{joke.punchline}</em>
        </div>
    )
}
export default Joke