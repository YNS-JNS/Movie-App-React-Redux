import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <>
            <div className='justify-content-center text-center'>
                <h2 className='Display-1'>Oops! Page not found.</h2>
                <h4>We can't fint the page you're looking for.</h4>
                <Link to="/">
                    <button type="button" className="" >GO BACK HOME</button>
                </Link>
            </div>
        </>
    )
}

export default NotFound