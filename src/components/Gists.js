import React from 'react';
import Gist from './Gist';
import './Gists.css';;

const Gists = (props) => {
    const {gists, username} = props.options;

    const renderGists = () => {
        if(!gists || gists.length === 0)
        {
            return (<div className='app-message'>
                <h3>No github gists found for username '{username}'</h3>
                <h4>Try again with another user</h4>
            </div>)
        }

        let rendered = gists.map((gist, indx) => {
            return (<li key={indx}>
                <Gist gist={gist} />
            </li>);
        });

        return (<ul className='gist-list'>
            {rendered}
        </ul>);
    };

    return (<div className='gists'>
        {renderGists()}
    </div>)
};

export default Gists;