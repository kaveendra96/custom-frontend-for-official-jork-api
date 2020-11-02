import React from 'react'
import Joke from './Joke'

class Jokes extends React.Component{

    state={jokes:[]}

    async componentDidMount(){
       await fetch('https://official-joke-api.appspot.com/random_ten')
            .then(res => res.json())
                .then(jokes => this.setState({jokes}))

    }


    render(){
        const { jokes } = this.state
        return(
            <div className="container">
                {
                    jokes.map(joke => {
                        return(
                            <Joke key={joke.id} joke={joke}></Joke>
                     ) })
                }
            </div>
        )
    }
}
export default Jokes