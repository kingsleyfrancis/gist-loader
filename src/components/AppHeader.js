import React, {useState} from 'react';

const AppHeader = (props) => {
    const [username, setUsername] = useState('');

    const loadGist = () => {
        props.loadGist(username);
    };

    const updateUsername = (e) => {        
        setUsername(e.target.value);
    }

    return (<header className='app-header'>        
    <h2>Enter username to load github gist of that user.</h2>
    <div className='app-header-form'>
      <input 
        type='text' 
        value={username} 
        placeholder='Github Username'
        onChange={(e) => updateUsername(e)} />
        <button type='button' className='btn load-gist-button' onClick={loadGist}>
          Load Gist
        </button>
    </div>
  </header>)
};

export default AppHeader;