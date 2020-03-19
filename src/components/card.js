import React from 'react';

const Card = ({image, title, link}) =>{
    return(
        <div className="cards">
           <img src={image} atl="game"/>
           <div>
            <a href={link}>{title}</a>
           </div>
        </div>
    );
}

export default Card;