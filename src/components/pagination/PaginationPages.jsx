import React from 'react'
import { useParams } from 'react-router-dom'
import { ItemsListContainer } from '../item/ItemsListContainer'

const PaginationPages = () => {


    let params = useParams();

    let paginationPages = params.id;

    return (
        <>
        
            <ItemsListContainer paginationPages={paginationPages} />

        </>
    )
}

export default PaginationPages