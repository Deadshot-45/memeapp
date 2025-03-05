import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MemeDetailsPage({ match }) {
  const [meme, setMeme] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://api.imgur.com/3/meme/${match.params.id}`)
      .then(response => {
        setMeme(response.data.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
      });
  }, [match.params.id]);

  return (
    <div>
      <h1>Meme Details</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <img src={meme.images[0].link} alt={meme.title} />
          <p>{meme.title}</p>
          <p>{meme.caption}</p>
        </div>
      )}
    </div>
  );
}

export default MemeDetailsPage;