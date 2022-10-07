import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({paginationPages}) => {

/*     const nextHandler = () => {
        setPages( pages + 1 ) 
    };

    const prevHandler = () =>{
        if(pages > 1){
            setPages( (prev) => prev - 1 )
        } else {null}
    } */

    let pages = parseInt(paginationPages);

    return (
        <>
        
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item">
                    <Link className="page-link" to={`/pages/${pages > 1 ? pages - 1 : pages = 1}`} aria-label="Previous"> 
                        <span aria-hidden="true"> &laquo; </span>
                    </Link>
                </li>
                <li className="page-item"><Link to={`/pages/${paginationPages}`} className="page-link" > {paginationPages} </Link></li>
                <li className="page-item">
                    {paginationPages ? <Link className="page-link" aria-label="Next" to={`/pages/${pages + 1}`}>
                        <span aria-hidden="true">&raquo;</span>
                    </Link> : ''}
                </li>
            </ul>
        </nav>

        </>
    )
}

export default Pagination