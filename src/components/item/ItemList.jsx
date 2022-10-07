import React from 'react';
import { Link } from 'react-router-dom';

export const ItemList = ({serie}) => {
  return (
    <>
      <div className="card card2 m-3 p-0">
        <img src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`} className="card-img-top" alt={serie.name} />
        <div className="card-body">
          <h5 className="card-title fw-bolder">{serie.name}</h5>
        </div>
        <Link to={`/serie/${serie.id}`} className="btn btn-primary">See More</Link>
      </div>
    
    </>
  )
}

