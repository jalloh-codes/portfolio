import React from 'react';

const Card = ({data, image, link, title, alt}) =>{

    return(
        <div className="card-body" >
            <img className="img" src={image} alt={alt}/>
            <div className="name">
           <a href={link}> 
            <h5 className="card-title">{title}</h5>
           </a>
           {/* <GitCard /> */}
        
        </div>
        </div>
    );
}

export default Card;