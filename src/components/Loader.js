import React from 'react';

const Loader = (props) => {
    return (<div className='loader-container'>        
        <div className='loader'>
            <div className='spinner'></div>
            <div className='loader-text'>
                Loading gists...
            </div>
        </div>
    </div>);
};

export default Loader;