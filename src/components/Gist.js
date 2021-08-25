import axios from 'axios';
import React, {useEffect, useState} from 'react';
import Fork from './Fork';

const Gist = (props) => {
    const {gist} = props;

    const [forks, setForks] = useState([]);
    const [isForksLoading, setForksLoading] = useState(false);
    const [forksLoaded, setForksLoaded] = useState(false);
    //const token = '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';

    /*const header = {
        "Authorization": `token ${token}`
    };*/

    const loadForks = async () => {
        if(!gist)
            return;

        const url = `${gist.forks_url}`;
        try {
            setForksLoading(true);
            /*let response = await axios.get(url, {
                headers: header
            });*/
            let response = await axios.get(url);
            setForksLoading(false);
            setForksLoaded(true);
            if(response && response.status === 200){
                setForks(response.data);
            }
        } catch (error) {
            console.error(error);
            setForksLoading(false);
            setForksLoaded(true);
        }
    };

    
    useEffect(() => {
        loadForks();
    },[]);

    const renderForks = () => {
        if(isForksLoading){
            return (<div className='tiny-loader'></div>);
        }

        if(forksLoaded && forks.length === 0){
            return null;
        }

        let length = forks.length;
        const last3 = forks.slice(Math.max(length - 3, 0));
        console.log(`Length: ${length}, Last 3: `, last3);

        let rendered = last3.map((fk, ind) => {
            return (<Fork key={ind} fork={fk} />);
        })

        return (<div className='fork-list'>
            {rendered}
        </div>);
    };


    const getTags = () => {
        if(!gist.files) {
            return null;
        }

        let rendered = [];
        let count = 1;

        for (const key in gist.files) {
            if (Object.hasOwnProperty.call(gist.files, key)) {
                const file = gist.files[key];
                let type = file.type;

                if(type) {
                    rendered.push(<li key={count++}>
                        <span className='tag'>{type}</span>
                    </li>);
                }
            }
        }

        return (
            <ul className='tag-list'>
                {rendered}
            </ul>);
    };

    return (<div className='gist'>
        <div className='gist-description'>
            <p>{gist.description}</p>
        </div>
        <div className='tags'>
            <strong>Tags: </strong>
            {getTags()}
        </div>
        <div className='forks'>
            <strong>Forks: </strong>
            {renderForks()}
        </div>
    </div>);
};

export default Gist;