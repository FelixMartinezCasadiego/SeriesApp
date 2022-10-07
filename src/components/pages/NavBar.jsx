import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useForm } from '../../hooks/useForm';

const NavBar = () => {

    const apiKey = 'c6aeee577586ba38e487b74dfede5deb';
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`;

    const navigate = useNavigate();

    const { searchSeries, onInputChange} = useForm({
        searchSeries: ''
      });

    const onSubmit = (e) =>{
        e.preventDefault();
        if(searchSeries.trim().length <= 1) return;

        navigate(`${url}${searchSeries.toLowerCase()}`)
    }

    return (
        <>

            <div className='navBar sticky-top'>
                <nav>
                    <ul >
                        <li><Link to={'/'}>Popular</Link></li>
                        <li><Link to={'/topRated'} >Top Rated</Link></li>
                        <li ><Link to={'/onAir'} >TV Airing Today</Link></li>
                    </ul>
                </nav>

                <form className='formSearch' /* onSubmit={onSubmit} */>
                    <input 
                        type="text" 
                        placeholder='Search for a serie' 
                        required
                        name='searchSeries'
                        value={searchSeries}
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