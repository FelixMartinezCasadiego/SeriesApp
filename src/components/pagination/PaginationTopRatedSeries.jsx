import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemListTopRatedContainer from '../item/ItemListTopRatedContainer';

const PaginationTopRatedSeries = () => {

    let params = useParams();

    const [paginationTopRated, setPaginationTopRated] = useState(params.id);

    useEffect(() => {
        setPaginationTopRated(params.id)
    }, [params.id]);
    

  return (
    <>
    
        <ItemListTopRatedContainer pagination={paginationTopRated} />
    
    </>
  )
}

export default PaginationTopRatedSeries;