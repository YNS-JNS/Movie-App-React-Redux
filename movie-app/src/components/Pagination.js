import React from 'react'
import ReactPaginate from 'react-paginate';

function Pagination({ getPage, pageCount }) {

    const handlePageClick = (data) => {
        // console.log(data.selected + 1) // get number of page: data.selected + 1
        getPage( data.selected + 1 );
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