import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { pagesTopRatedSeries, retriveAllTopRateSeries } from '../../api/main';
import PaginationTopRated from '../pagination/PaginationTopRated';
import { ItemList } from './ItemList';


const ItemListTopRatedContainer = ({pagination}) => {

    const [topRatedSerie, setTopRatedSerie] = useState([]);

    useEffect(() => {
        
        if(pagination !== null && pagination !== ''){
            pagesTopRatedSeries(pagination)
                .then((resp) => setTopRatedSerie(resp))
                .catch((err) => {throw new Error(err)})
        } else {
            retriveAllTopRateSeries()
                .then((resp) => setTopRatedSerie(resp))
                .catch((err) => {throw new Error(err)})
        };
        
    }, [pagination]);
    

    return (
        <>

            <div className='container-fluid'>

                <h2 className='fw-bolder mx-5'>Top Rated Series</h2>

                <div className='row col-12 m-0 d-flex justify-content-center'>
                    {
                    topRatedSerie.results ? (topRatedSerie.results.map((serie) => <ItemList serie={serie} key={serie.id} />)) : null
                    }
                    </div>

                <div className='d-flex justify-content-center my-5'>
                    <PaginationTopRated paginationPages={pagination ? pagination : 1} />
                </div>

            </div>

        </>
    )
}

export default ItemListTopRatedContainer;