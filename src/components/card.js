import React from 'react';

const Card = ({image, title, link, alt}) =>{
    return(
        <div className="cards">
           <img src={image} alt={alt}/>
           <div>
            <a href={link}>{title}</a>
           </div>
        </div>
    );
}

export default Card;