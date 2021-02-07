import React from 'react';

const GitCard = ({name, description, id, html_url, language, homepage}) =>{

    return(
        <div className="sm-cards" key={id+1}>
            <li><span>Name:</span> <a href={html_url}>{name}</a></li>
            <li><span>Language:</span> {language}</li>
            <li ><a href={homepage}>Homepage</a></li>
            <p><span>Description:</span> {description}</p>
        </div>
    );
}

export default GitCard;