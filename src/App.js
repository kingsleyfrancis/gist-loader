import React, {useState} from 'react';
import axios from 'axios';
import './App.css';
import AppHeader from './components/AppHeader';
import AppBody from './components/AppBody';

function App() {
  const [gists, setGists] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isSearched, setSearched] = useState(false);
  const [searchedUsername, setSearchedUsername] = useState('');
  const [searchFailed, setSearchFailed] = useState(false);
 
  const loadGist = async (username) => {
    if(!username) {
      alert('Username is required');
      return;
    }

    setSearchFailed(false);
    setSearched(true);
    setSearchedUsername(username);
    let url = `https://api.github.com/users/${username}/gists`;
    try {
      
      setLoading(true);
      
      let response = await axios.get(url);
      setLoading(false);

      if (response && response.status === 200) {
        setGists(response.data);
      } else {
          setSearchFailed(true);
      } 
    } catch(ex) {
      setLoading(false);
      setSearchFailed(true);
      console.error(ex);
    }
  };

  let obj = {
    isSearched,
    gists,
    isLoading,
    searchFailed,
    username: searchedUsername
  };

  return (
    <div className="app">
      <AppHeader loadGist={loadGist} />
      <AppBody options={obj} />
    </div>
  );
}

export default App;
