import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {

    const navigate = useNavigate();

    const [searchSerie, setSearchSerie] = useState("");

    const onSubmit = (e) =>{
        e.preventDefault();
        if(searchSerie.trim().length <= 1) return;

        navigate(`/?q=${searchSerie.toLowerCase()}`)
    };

    const onInputChange = (e) => {
        setSearchSerie(e.target.value); 
    };

    return (
        <>

            <div className='navBar sticky-top'>
                <nav>
                    <ul >
                        <li><Link to={'/'}>Popular</Link></li>
                        <li><Link to={'/top_rated'} >Top Rated</Link></li>
                        <li ><Link to={'/airing_today'} >TV Airing Today</Link></li>
                    </ul>
                </nav>
                    
                <form className='formSearch' onSubmit={onSubmit}>
                    <input 
                        type="text" 
                        placeholder='Search for a serie' 
                        required
                        name='searchSeries'
                        value={searchSerie}
                        onChange={onInputChange}
                    />
                    <div className='btnSearch'>
                        <i className='fa-solid fa-magnifying-glass' ></i>
                    </div>
                </form>
            </div>
         
        </>
    )
}

export default NavBar;