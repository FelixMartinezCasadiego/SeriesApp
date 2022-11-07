import React from 'react';
import { useState, useEffect } from 'react';
import { retriveSeries, searchSeries } from '../../api/main';
import {ItemList} from './ItemList';
import '../../css/item/itemList.css'
import Pagination from '../pagination/Pagination';
import { useParams, useSearchParams } from 'react-router-dom';

export const ItemsListContainer = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  const q = searchParams.get('q');
  const page = searchParams.get('page');

  const params = useParams();
  const categorySeries = params.categorySeries;

  const [series, setSeries] = useState([]);

  let titleCategory = () => {
    if(categorySeries === undefined) {
      return "Popular"
    } else if (categorySeries === "top_rated") {
      return "Top Rated"
    } else {return "TV Airing Today"}
  }

  useEffect(() => {
    
    let currentPage = page ? page : 1;
    let currentCategory = categorySeries ? categorySeries : 'popular';

    if(q){
      searchSeries(currentPage, q)
        .then((resp) => setSeries(resp.data))
        .catch((error) => {throw new Error(error)})
    } else if (currentCategory){
        retriveSeries(currentCategory, currentPage)
          .then((resp) => setSeries(resp))
          .catch((error) => {throw new Error(error)})
    }
    
  }, [q, page, categorySeries]); 

  return (
    <>
      <div className='container-fluid'>

        <h2 className='fw-bolder mx-5'> {titleCategory()} </h2>
 
        <div className='row col-12 m-0 d-flex justify-content-center'>
          {
          series.results ? (series.results.map((serie) => <ItemList serie={serie} key={serie.id} />)) : null
          }
        </div>
        
        <div className='d-flex justify-content-center my-5'>
          <Pagination page={page ? page : 1} setSearchParams={setSearchParams} searchParams={searchParams} series={series} />
        </div>
        

      </div>
    </>
  )
}
