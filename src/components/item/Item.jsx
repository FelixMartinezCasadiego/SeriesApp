import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({serieDetails}) => {

  const genre = serieDetails.genres ? serieDetails.genres.map((genres) => genres.name).join(' , ') : null ;

  const networkLogo = serieDetails.networks ? serieDetails.networks.map((resp) => resp.logo_path).join() : null;

  const created = serieDetails.created_by ? serieDetails.created_by.map((resp) => resp.name).join(' , ') : null;

  const country = serieDetails.origin_country ? serieDetails.origin_country[0] : null;

  return (
    <>

      <Link className='' to={'/'}>
        <button type="button" className="btn btn-light btn-lg">Back</button>
      </Link>

      <div className='d-flex justify-content-center'>
      
        <div className="card m-3 itemCard" >
          <div className="row g-0">
            <div className="col-md-4">
              <img src={`https://image.tmdb.org/t/p/w400${serieDetails.poster_path}`} className="img-fluid imgCard1" alt={serieDetails.name} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title d-inline fw-bolder">{serieDetails.name}</h5>
                <p className='d-inline ms-3'>({serieDetails.first_air_date})</p>
                <p className="card-text mt-3">{serieDetails.overview}</p>
                <p className='d-inline'> <span className='fw-bolder'>Seasons:</span>  {serieDetails.number_of_seasons} </p>
                <p className='d-inline ms-3'> <span className='fw-bolder'>Episodes:</span> {serieDetails.number_of_episodes} </p>
                <div className='d-flex mt-3'>
                  <p className='me-2 fw-bolder'>Last episode to date: </p>
                  <p className='me-2'>| { serieDetails.last_episode_to_air ? serieDetails.last_episode_to_air.name : null} </p>
                  <p>| {serieDetails.last_episode_to_air ? serieDetails.last_episode_to_air.episode_number : ""} </p>
                </div>

                <p className='m-0 fw-bolder'>Network:</p>
                <img className='imgCard mb-3 mt-1' src={`https://image.tmdb.org/t/p/w200${networkLogo}`} alt={serieDetails.name} />

                <p> <span className='fw-bolder'> Genres: </span>  {genre} </p>
                <p> <span className='fw-bolder'> Creator: </span>  {created} </p>
                <p> <span className='fw-bolder'> Origin Country: </span>  {country} </p>
              </div>
            </div>

          </div>
        </div>

      </div>
      
    
    </>
  )
}

export default Item