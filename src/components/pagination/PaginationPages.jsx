import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { ItemsListContainer } from '../item/ItemsListContainer'

const PaginationPages = () => {

    let params = useParams();

    const [pagination, setPagination] = useState(params.id);

    useEffect(() => {

        setPagination(params.id);

    }, [params.id]);
    

    return (
        <>
        
            <ItemsListContainer paginationPages={pagination} />

        </>
    ) 
}

export default PaginationPages