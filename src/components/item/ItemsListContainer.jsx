import React from 'react';
import { useState, useEffect } from 'react';
import { Pages, retriveAllPopularSeries } from '../../api/main';
import {ItemList} from './ItemList';
import '../../css/item/itemList.css'
import Pagination from '../pagination/Pagination';

export const ItemsListContainer = ({paginationPages}) => {

  const [series, setSeries] = useState([]);

  useEffect(() => {
    
    if(paginationPages !== null && paginationPages !== ''){
      Pages(paginationPages)
        .then((resp) => setSeries(resp))
        .catch((error) => {throw new Error(error)})
    } else {
        retriveAllPopularSeries()
          .then((resp) => setSeries(resp))
          .catch((error) => {throw new Error(error)})
    };

  }, [paginationPages]); 

  return (
    <>
      <div className='container-fluid'>

        <h2 className='fw-bolder mx-5'>Popular Series</h2>
 
        <div className='row col-12 m-0 d-flex justify-content-center'>
          {
          series.results ? (series.results.map((serie) => <ItemList serie={serie} key={serie.id} />)) : null
          }
        </div>
        
        <div className='d-flex justify-content-center my-5'>
          <Pagination paginationPages={paginationPages ? paginationPages : 1} />
        </div>
        

      </div>
    </>
  )
}
