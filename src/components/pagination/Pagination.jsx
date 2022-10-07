import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Pagination = () => {

    const [pages, setPages] = useState(1)

    const nextHandler = () => {
        setPages( (next) => next + 1 );
    }
    const prevHandler = () =>{
        if(pages > 1){
            setPages( (prev) => prev - 1 )
        } else {null}
    }

  return (
    <>
    
    <nav aria-label="Page navigation example">
        <ul className="pagination">
            <li className="page-item">
                <Link className="page-link" to={`/pages/${pages}`} aria-label="Previous" onClick={prevHandler}> 
                    <span aria-hidden="true"> &laquo; </span>
                </Link>
            </li>
            <li className="page-item"><Link to={`/pages/${pages}`} className="page-link" > {pages} </Link></li>
            <li className="page-item">
                <Link className="page-link" aria-label="Next" to={`/pages/${pages}`} onClick={nextHandler}>
                    <span aria-hidden="true">&raquo;</span>
                </Link>
            </li>
        </ul>
    </nav>

    </>
  )
}

export default Pagination