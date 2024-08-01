import React, { useContext } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import TopHeadlines from './TopHeadlines';
import Pagination from './Pagination';
import NewsContext from '../context/NewsContext';

const Home = () => {

    let ctx=useContext(NewsContext)
    console.log(ctx)

    const [news, setnews] = useState([]);

    const [currentPage, setcurrentPage] = useState(1); 

    let getData = async () => {
        let response = await fetch(`https://newsapi.org/v2/everything?q=${ctx.search}&apiKey=5aab931fd3aa486dab4b7922ebca558d`)
        let data = await response.json();
        // console.log(data)
        console.log(data.articles)
        setnews(data.articles)
    }

    useEffect(() => {
        getData()
    }, [ctx.search])


    let itemPerPage = 10;
    let lastIndex = currentPage * itemPerPage;
    let firstIndex = lastIndex- itemPerPage;
    let sliceItem = news.slice(firstIndex, lastIndex)


    return (
        <div className="row  m-0 p-0  ">
            <div className="col-9 mt-2 DailyNews ">
                <div className='row gap-4 justify-content-center'>
                    {sliceItem.map((ele) => {
                        return <>
                            {ele.urlToImage && <div  className="card " style={{ width: '16rem' }}>
                                <img src={ele.urlToImage} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title ">{ele.title}</h5>
                                    {ele.author && <h6 className="card-title "> Author: {ele.author}</h6>}
                                    <h6 className="card-text ">Publish: {ele.publishedAt}</h6>
                                    <Link to={ele.url} className="btn btn-primary">View Details</Link>
                                </div>
                            </div>}
                        </>

                    })}
                </div>
                    <Pagination news={news} itemPerPage={itemPerPage} currentPage={currentPage} setcurrentPage={setcurrentPage} />
            </div>

            <div className="col-3 headings mt-2 ">
                <h3 className='text-center bg-danger p-1 headingTitle'>Top Headlines</h3>
                <div className="topHeadlinesContainer">
                    <TopHeadlines />
                </div>
            </div>
        </div>
    )
}

export default Home
