import React from 'react'
import { Link } from 'react-router-dom'

const Pagination = (props) => {
    let noOfBtn=Math.ceil(props.news.length/props.itemPerPage)
    let btnArr=[...Array(noOfBtn+1).keys()].splice(1)
    // console.log(btnArr)

    const handlePrevious=()=>{
        if(props.currentPage>1){
            props.setcurrentPage(props.currentPage-1)
        }
    }

    const handleNext=()=>{
        if(props.currentPage<props.news.length+1){
            props.setcurrentPage(props.currentPage+1)
        }
    }
    return (
        <div>
            <nav aria-label="Page navigation example">
                <ul className="pagination flex-wrap mt-3">
                    <li onClick={handlePrevious} className="page-item"><Link className="page-link" to="#">Previous</Link></li>
                    {
                        btnArr.map((ele)=>{
                            return <li key={ele} onClick={()=>props.setcurrentPage(ele)} className={props.currentPage===ele ?"page-item active":"page-item"} ><Link className="page-link" to="#">{ele}</Link></li>
                        })
                    }
                    <li onClick={handleNext} className="page-item"><Link className="page-link" to="#">Next</Link></li>
                </ul>
            </nav>

        </div>
    )
}

export default Pagination
