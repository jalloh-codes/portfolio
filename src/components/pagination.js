import React from 'react';

const Pagination = ({postsPerpage, totalPosts, paginate}) => {

    let pageNumber = []
    for(let i =1 ; i <= Math.ceil(totalPosts / postsPerpage); i++){
         pageNumber.push(i)
    }

    return (
        <div className="pagi"> 
            <ul className="pageList">
                {pageNumber.map(num =>(
                    <li key={num}>
                        <a onClick={(e) => {
                            e.preventDefault()
                            return paginate(num)
                        }} href={num}>{num}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Pagination;
