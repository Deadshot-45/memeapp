import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {user} from '../ApiFetch/MemesApi'

function Home({setMeme}) {
  const [memes, setMemes] = useState([]);
  const [loading, setLoading] = useState(true);
console.log(user);
  useEffect(() => {
    axios.get('https://api.imgflip.com/get_memes')
      .then(response => {
        setMemes(response.data.data.memes)
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Trending Memes</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className='grid grid-cols-5'>
          {memes.map(meme => (
            <li key={meme.id} className='flex flex-col w-[200px] justify-between mx-auto mb-10'>
              <Link to={'/memepage'} onClick={()=>setMeme(user)}>
                  <img src={meme.url} alt={meme.name} className='w-[200px] h-[200px]' />
              </Link>
              <p >{meme.name}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Home;