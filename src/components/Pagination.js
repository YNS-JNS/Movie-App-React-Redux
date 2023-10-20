import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';
import { useSelector, useDispatch } from 'react-redux';
import { getPage } from '../redux/actions/moviesAction';

function Pagination() {

    // save page number (pagination) and update pageCount
    const [pageCount, setPageCount] = useState(0);

    const dispatch = useDispatch();
    // get number of page from reducer
    const pages = useSelector((state) => state.pageCount)

    useEffect(() => {
        // update pageCount
        setPageCount(pages); 
      }, [])

    // For Getting number count of the page
    const handlePageClick = (data) => {
        // get number of page: data.selected + 1
        dispatch(getPage(data.selected + 1));
    }

    return (
        <>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                marginPagesDisplayed={2}
                pageRangeDisplayed={2}
                pageCount={pageCount}
                previousLabel="< previous"
                containerClassName='pagination justify-content-center p-3'
                pageClassName='page-item'
                pageLinkClassName='page-link'
                nextClassName='page-item'
                nextLinkClassName='page-link'
                previousClassName='page-item'
                previousLinkClassName='page-link'
                breakClassName='page-item'
                breakLinkClassName='page-link'
                activeClassName='active'

            />
        </>
    )
}

export default Pagination