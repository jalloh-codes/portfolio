import React, {useEffect, useState} from 'react';
import Card from './card';
import imgcovid1 from '../img/imgcovid1.jpg';
import imgbook1 from '../img/imgbook1.png';
import imggame1 from '../img/imggame1.png';
import imgmusic1 from '../img/imgmusic1.jpeg';
import imgneigh1 from '../img/imgneigh1.png';
import imgquiz1 from '../img/imgquiz1.jpeg';
import imgrestu1 from '../img/imgrestu1.png';
import axios from 'axios';
import GitCard from './gitCard';
import Pagination from './pagination'
const Projects = ()=> {

    const [data , setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage] =  useState(10)

    const [loading, setLoading] = useState(false)
    const [chnagePro, setChanagePro] =  useState(false);
    useEffect(() =>{
        const fetachData =  async () =>{
            const arr = ['library-manag-system-gsa19', 'Java-Bagel_shop','Final-project-Jalloh-Saylu',
            'arcadeGame', 'Fyyur', 'trivia', 'restaurant-reviews-app', 'neightborhoodmap',
             'memory-game-desktopVerson', 'memory-game', 'covid-19-tracker']
            setLoading(true)
            const res = await axios.get(`https://api.github.com/users/jalloh-codes/repos`)
    
            let newData = []
            res.data.filter((e) =>{
                arr.filter((a) =>{
                    if(e.name === a){
                        newData.push(e)
                    }
                })
            })
            setData(newData)

        }
        fetachData()
        setLoading(false)
    }, [])


    let lastPostIndex =  currentPage * postPerPage;
    let firstPostIndex = lastPostIndex - postPerPage
    let paginate = (pageNumber) => setCurrentPage(pageNumber)
    let currentPosts = data.slice(firstPostIndex, lastPostIndex)
    
   
    const chooseData =   (pName, arrayData) =>{
        let data = arrayData.filter(e => e.name === pName)
        return({data: data[0]})
    }

    const more= (e) =>{
        setChanagePro(!chnagePro)
    }

    if(loading === false){
        return(

            <div className="projects">
                {chnagePro === false ? 
                    <div className="work-wrapper">
                        <Card image={imgcovid1} 
                        title={'Memory Game'} s
                        link={`https://covid-19-tracker-silk.vercel.app/`} alt={'imgcovid1'}
                        data={chooseData('restaurant-reviews-app', data)}
                        name={'memory-game'}/>  

                        <Card image={imgquiz1} title={'Udacity Trivia'} 
                        link={`https://stoic-ride-8cd58c.netlify.app/`}
                            alt={'Fyyur music app'} data={data}/>

                        <Card image={imgneigh1} title={'Neighborhood'} 
                        link={`https://jalloh-codes.github.io/neightborhoodmap/`} 
                        alt={'neighborhood'} data={chooseData('neightborhoodmap', data)}/>
                        
                        <Card image={imggame1} title={'Memory Game'} 
                        link={`https://stoic-ride-8cd58c.netlify.app/`} alt={'memorygame'}
                            data={chooseData('covid-19-tracker', data)}/>
                        
                        <Card image={imgmusic1} title={'Fyyur music app'} 
                        link={`https://stoic-ride-8cd58c.netlify.app/`}
                            alt={'fyyur music app'} data={data}/>
                        
                        <Card image={imgbook1} title={'Book Store'} 
                        link={`https://we-books.vercel.app/`} alt={'Bokokstore'} data={chooseData('restaurant-reviews-app', data)}/>

                        <Card image={imgrestu1} title={'Restuarant review app'} 
                        link={`https://jalloh-codes.github.io/restaurant-reviews-app/`}
                            alt={'restuarant'} data={data}/>
                    </div>
                    :(
                    <>
                    <div className="work-wrapper">
                        {currentPosts.map(e =>
                        <GitCard  id={e.id} description={e.description} html_url={e.html_url} 
                        name={e.name} key={e.id} homepage={e.homepage} language={e.language}/> )}
                    </div>
                    <div className="work-wrapper">
                            <Pagination postsPerpage={postPerPage} totalPosts={data.length} paginate={paginate}/>
                    </div>
                    </>
                    )}
                <div className="btn-project">
                    <button className="more" onClick={more}>More Project</button>
                </div>
            </div>
            
        )
        
    }
    if(loading){
        return(
            <div className="projects">
                <p>Loading.............</p>
            </div>
        )
    }
    
        

}

export default Projects;