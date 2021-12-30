import React from 'react';

import './homepage.styles.scss';

const HomePage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
        <div className='menu-item'>
            <div classname='content'>
                <h1 className='title'>CAT NFTS</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
        <div className='menu-item'>
            <div classname='content'>
                <h1 className='title'>DOG NFTS</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
        <div className='menu-item'>
            <div classname='content'>
                <h1 className='title'>APE NFTS</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
        <div className='menu-item'>
            <div classname='content'>
                <h1 className='title'>WHALE NFTS</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
        <div className='menu-item'>
            <div classname='content'>
                <h1 className='title'>BIRD NFTS</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
        </div>
    </div>
);

export default HomePage;