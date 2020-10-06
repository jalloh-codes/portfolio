import React, {Component} from 'react';
import Card from './card';
import memoryGame from '../img/memoryGame.png';
import review from '../img/review.png';
import neighborhood from '../img/neighborhood.png';
import covid19tracker from '../img/covid19tracker.png'
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
                    <Card image={memoryGame} title={'Memory Game'} 
                    link={`https://jalloh-codes.github.io/memory-game/`} alt={'memoryGame'}/>
                    <Card image={review} title={'Restuarant review app'} 
                    link={`https://jalloh-codes.github.io/restaurant-reviews-app/`} alt={'restuarant'}/>
                    <Card image={neighborhood} title={'Neighborhood'} 
                    link={`https://jalloh-codes.github.io/neightborhoodmap/`} alt={'neighborhood'}/>
                    <Card image={covid19tracker} title={'Covid-19 Tracker'} 
                    link={`https://stoic-ride-8cd58c.netlify.app/`} alt={'covid19tracker'}/>
                </div>
                <div className="rows">
                {
                    this.state.data.map(e =>{ 
                    return(
                        <div className="sm-cards" key={e.id+1}>
                            <li key={e.id}><span>Name:</span> <a href={e.html_url}>{e.name}</a></li>
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