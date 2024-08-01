import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import NewsContext from '../context/NewsContext'

const Navbar = () => {

    let ctx=useContext(NewsContext)
    // console.log(ctx)

    const [item, setitem] = useState("");
    
    const handleClick=(ans)=>{
        console.log(ans)
       ctx.setsearch(ans)
    }

    const handleChanger=(e)=>{
        let value=e.target.value
        console.log(value)
        setitem(value)
    }

    const handleSearch=(e)=>{
        e.preventDefault()
        ctx.setsearch(item)
    }
    return (
        <div>

            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand news" to="#">News<span className='Box'>Box</span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="#">Home</Link>
                            </li>
                            <li onClick={()=>handleClick("sports")} className="nav-item">
                                <Link className="nav-link active" to="#">Sports</Link>
                            </li>
                            <li onClick={()=>handleClick("tech")} className="nav-item">
                                <Link className="nav-link active" to="#">Tech</Link>
                            </li>
                            <li onClick={()=>handleClick("crime")} className="nav-item">
                                <Link className="nav-link active" to="#">Crime</Link>
                            </li>
                            <li onClick={()=>handleClick("politics")} className="nav-item">
                                <Link className="nav-link active" to="#">Politics</Link>
                            </li>
                            <li onClick={()=>handleClick("lifestyle")} className="nav-item">
                                <Link className="nav-link active" to="#">Lifestyle</Link>
                            </li>
                            <li onClick={()=>handleClick("education")} className="nav-item">
                                <Link className="nav-link active" to="#">Education</Link>
                            </li>
                            <li onClick={()=>handleClick("india")} className="nav-item">
                                <Link className="nav-link active" to="#">India</Link>
                            </li>
                            <li onClick={()=>handleClick("finance")} className="nav-item">
                                <Link className="nav-link active" to="#">Finance</Link>
                            </li>

                        </ul>
                        <form className="d-flex ms-auto" role="search">
                            <input onChange={handleChanger} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button onClick={handleSearch} className="btn btn-outline-dark bg-warning" type="submit">Search</button>
                        </form>

                    </div>
                </div>
            </nav>


        </div>
    )
}

export default Navbar
