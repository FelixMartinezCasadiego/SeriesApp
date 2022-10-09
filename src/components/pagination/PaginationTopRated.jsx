import React from 'react';
import { Link } from 'react-router-dom';

const PaginationTopRated = ({paginationPages}) => {

    let pages = parseInt(paginationPages);

    return (
        <>
        
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item">
                    <Link className="page-link" to={`/pagesTopRated/${pages > 1 ? pages - 1 : pages = 1}`} aria-label="Previous"> 
                        <span aria-hidden="true"> &laquo; </span>
                    </Link>
                </li>
                <li className="page-item"><Link to={`/pagesTopRated/${paginationPages}`} className="page-link" > {paginationPages} </Link></li>
                <li className="page-item">
                    {paginationPages ? <Link className="page-link" aria-label="Next" to={`/pagesTopRated/${pages !== 500 ? pages + 1 : pages = 500}`}>
                        <span aria-hidden="true">&raquo;</span>
                    </Link> : ''}
                </li>
            </ul>
        </nav>

        </>
    )
}

export default PaginationTopRated;