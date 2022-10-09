import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemListOnAir from '../item/ItemListOnAir';

const PaginationOnAirSeries = () => {

    let params = useParams();

    const [paginationOnAir, setPaginationOnAir] = useState(params.id);

    useEffect(() => {
      setPaginationOnAir(params.id)
    }, [params.id]);
    

  return (
    <>
    
        <ItemListOnAir pagination={paginationOnAir} />
    
    </>
  )
}

export default PaginationOnAirSeries;