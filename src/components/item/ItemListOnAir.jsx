import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { pagesAiringToday, retriveAllOnAir } from '../../api/main';
import PaginationOnAir from '../pagination/PaginationOnAir';
import { ItemList } from './ItemList';

const ItemListOnAir = ({pagination}) => {

    const [onAir, setOnAir] = useState([]);

    useEffect(() => {
        if(pagination !== null && pagination !== ''){
            pagesAiringToday(pagination)
                .then((resp) => setOnAir(resp))
                .catch((err) => {throw new Error(err)})
        } else {
            retriveAllOnAir()
                .then((resp) => setOnAir(resp))
                .catch((err) => {throw new Error(err)})
        }
        
    }, [pagination]);
    

    return (

        <>
        
        <div className='container-fluid'>

            <h2 className='fw-bolder mx-5'>Tv Airing Today</h2>

            <div className='row col-12 m-0 d-flex justify-content-center'>
                {
                onAir.results ? (onAir.results.map((serie) => <ItemList serie={serie} key={serie.id} />)) : null
                }
            </div>

            <div className='d-flex justify-content-center my-5'>
                <PaginationOnAir paginationPages={ pagination ? pagination : 1} />
            </div>

        </div>
        
        </>
        
    )
}

export default ItemListOnAir;