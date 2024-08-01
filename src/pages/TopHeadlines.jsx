import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const TopHeadlines = () => {

    const [news, setnews] = useState([]);

    const getData = async () => {
        let res = await axios(` https://newsapi.org/v2/top-headlines?country=in&apiKey=5aab931fd3aa486dab4b7922ebca558d`)
        console.log(res.data.articles)
        setnews(res.data.articles)
    }

    useEffect(() => {
        getData()
    }, [])

  

    return (
        <div>
            
          {news.map((ele) => {
            return <h6 key={ele.url} className='mb-3 update'><Link to={ele.url}>{ele.title}</Link></h6>
          })}
         </div>
           
    )
}

export default TopHeadlines


