import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { retriveSerieById } from '../../api/main';
import Item from './Item';

export const ItemContainer = () => {

  const [serieDetails, setsSerieDetails] = useState([]);

  let params = useParams();

  const serieByName = params.id;

  useEffect(() => {
    
    if(serieByName !== null){
      retriveSerieById(serieByName)
        .then((resp) => setsSerieDetails(resp))
        .catch((error) => {throw new Error(error)});
    }

  }, [serieByName])

  return (
    <>
    
      <div className='container'>
        <Item serieDetails={serieDetails} /> 
      </div>

    </>
  )
}

