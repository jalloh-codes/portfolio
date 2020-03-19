import React, {Component} from 'react';
import Card from './card';
import memoryGame from '../img/memoryGame.png';
import review from '../img/review.png'
import neighborhood from '../img/neighborhood.png'
import axios from 'axios';
class Projects  extends Component{

    constructor(props){
        super(props);
        this.state={
            data: []
        }
    }

    componentDidMount(){
        axios.get(`https://api.github.com/users/jalloh-codes/repos`)
          .then(res => {
              let data = res.data;
              this.setState({data})
          })
    }

    render(){
        return( 
        <div className="projects">
            <div className="works">
                <div className="rows">
                    <p>These are some of my projects and the rest are available on
                        <a href="https://github.com/jalloh-codes"> Github</a>.
                    </p>
                </div>
                <div className="rows">
                    <Card image={memoryGame} title={'Memory Game'} 
                    link={`https://jalloh-codes.github.io/memory-game/`} alt={'memoryGame'}/>
                    <Card image={review} title={'Restuarant review app'} 
                    link={`https://jalloh-codes.github.io/restaurant-reviews-app/`} alt={'restuarant'}/>
                    <Card image={neighborhood} title={'Neighborhood'} 
                    link={`https://jalloh-codes.github.io/neightborhoodmap/`} alt={'neighborhood'}/>
                </div>
                <div className="rows">
                {
                    this.state.data.map(e =>{ 
                    return(
                        <div className="sm-cards">
                            <li key={e.id}><spa>Name:</spa> <a href={e.html_url}>{e.name}</a></li>
                            <p><span>Description:</span> {e.description}</p>
                        </div>)
                    })
                }
                </div>
            </div>
        </div>
        );
    }
}

export default Projects;