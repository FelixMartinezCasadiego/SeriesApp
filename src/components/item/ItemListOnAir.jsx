import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { retriveAllOnAir } from '../../api/main';
import { ItemList } from './ItemList';

const ItemListOnAir = () => {

    const [onAir, setOnAir] = useState([]);
    useEffect(() => {
        retriveAllOnAir()
            .then((resp) => setOnAir(resp))
            .catch((err) => {throw new Error(err)})
    }, []);
    

    return (

        <>
        
        <div className='container-fluid'>

            <h2 className='fw-bolder mx-5'>Top Rated Series</h2>

            <div className='row col-12 m-0 d-flex justify-content-center'>
                {
                onAir.results ? (onAir.results.map((serie) => <ItemList serie={serie} key={serie.id} />)) : null
                }
            </div>

{/*             <div className='d-flex justify-content-center my-5'>
                <Pagination />
            </div> */}

        </div>
        
        </>
        
    )
}

export default ItemListOnAir