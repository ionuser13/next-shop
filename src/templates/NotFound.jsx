import React from 'react';
import logo from "@logos/logo_yard_sale.svg";
import "@styles/notFound.scss"

const NotFound = () => {
    return (
        <div className='NotFound'>
            <img src={logo} alt="main logo" className='notfound-logo' />
            <div className='lower-container'>
                <h1 className='lost'>Oh no... We lost this page</h1>
                <div className='description-container'>
                    <p>We searched everywhere but couldn't find what you are looking for.</p>
                    <p>Let's find a better place for you to go.</p>
                </div>
                <div className='back'>
                    <button className='primary-button'><a href="/" className='home-link'>Home</a></button>   
                </div>
            </div>
        </div>
    );
}

export default NotFound;