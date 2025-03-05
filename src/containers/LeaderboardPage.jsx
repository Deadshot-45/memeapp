import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdLeaderboard } from "react-icons/md";
import { leadersData } from '../ApiFetch/MemesApi';

function LeaderboardPage() {
  const [leaders, setLeaders] = useState(leadersData);
  const [loading, setLoading] = useState(true);

  return (
    <div>
      <div className='w-full flex gap-1 items-center'><MdLeaderboard/><h1>Leaderboard</h1></div>
      {!loading ? (
        <p>Loading...</p>
      ) : (
        <ul className='flex flex-col gap-4 border'>
          {leaders.map(leader => (
            <li key={leader.id} className='w-1/2 h-[100px] flex justify-between items-center mx-auto border'>
              <img src={leader.avatar} alt={leader.username} className='w-[100px] h-[100px] mx-auto'/>
              <p className='w-1/3 h-full flex items-center justify-center border-l'>{leader.username}</p>
              <p className='w-1/3 h-full flex items-center justify-center border-l'>{leader.score}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LeaderboardPage;