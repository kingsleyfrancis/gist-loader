import React from 'react';

const Fork = (props) => {
    const {fork} = props;
    console.log('Fork: ', fork);

    const owner = fork.owner;

    return (<div className='fork'>
        <a href={fork.forks_url}>
            <img src={owner.avatar_url} alt={owner.login} />
        </a>
        <a href={fork.forks_url}>
            <strong>{owner.login}</strong>
        </a>
    </div>)
};

export default Fork;