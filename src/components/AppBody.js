import React from 'react';
import Gists from './Gists';
import Loader from './Loader';

const AppBody = (props) => {
    const {isLoading, isSearched, searchFailed, username} = props.options;

    const renderBody = () => {
        if(!isSearched)
            return null;

        if(isLoading){
            return (<Loader />);
        }

        if(searchFailed) {
            return (<div className='app-message'>
                <h3>'{username}' not found</h3>
            </div>);
        }

        return (<Gists {...props} />);
    }

    return (<div className="app-body">      
        <div className='app-body-content'>
            {renderBody()}
        </div>
      </div>)
};

export default AppBody;