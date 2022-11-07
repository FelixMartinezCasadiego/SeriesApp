
const Pagination = ({page, setSearchParams, searchParams, series}) => {

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
                    { page > 1 ? <button className="page-link" aria-label="Previous" onClick={decrement}> 
                        <span aria-hidden="true"> &laquo; </span>
                    </button> : ''}
                </li>
                { page - 1 >= 1 ? <li className="page-item"><button className="page-link" onClick={decrement}> {parseInt(page) - 1} </button></li> : ""}
                <li className="page-item"><button className="btn btn-primary"> {page} </button></li>
                { page >= 3 ? <li className="page-item"><button className="page-link" onClick={increment}> {parseInt(page) + 1} </button></li> : ""}
                <li className="page-item">
                    {page < series.total_pages ? <button className="page-link" aria-label="Next" onClick={increment}>
                        <span aria-hidden="true" >&raquo;</span>
                    </button> : ''}
                </li>
            </ul>
        </nav>

        </>
    )
}

export default Pagination