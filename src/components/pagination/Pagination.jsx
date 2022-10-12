import { Link } from 'react-router-dom';

const Pagination = ({page, setSearchParams, searchParams}) => {

    const increment = () => {
        let updatedSearchParams = new URLSearchParams(searchParams.toString());
        updatedSearchParams.set('page', parseInt(page) + 1);
        setSearchParams(updatedSearchParams.toString());
    }

    const decrement = () => {
        let updatedSearchParams = new URLSearchParams(searchParams.toString());
        updatedSearchParams.set('page', parseInt(page) - 1);
        setSearchParams(updatedSearchParams.toString());
    }


    return (
        <>
        
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item">
                    <button className="page-link" aria-label="Previous" onClick={decrement}> 
                        <span aria-hidden="true"> &laquo; </span>
                    </button>
                </li>
                <li className="page-item"><button className="page-link"> {page} </button></li>
                <li className="page-item">
                    {page ? <button className="page-link" aria-label="Next" onClick={increment}>
                        <span aria-hidden="true" >&raquo;</span>
                    </button> : ''}
                </li>
            </ul>
        </nav>

        </>
    )
}

export default Pagination