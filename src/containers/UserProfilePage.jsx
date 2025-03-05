import React, { useState, useEffect } from "react";
import { user } from "../ApiFetch/MemesApi";
import { FaRegHeart, FaHeart, FaComment } from "react-icons/fa";
import { PiShareFatFill } from "react-icons/pi";

const UserProfileHeader = () => {
  return (
    <div className="flex justify-between">
      <div className="w-1/2 mb-10">
      <h1>Hello World</h1>
        <img
          src={user.avatar}
          alt={user.username}
          className="mix-blend-color-dodge w-[400px] h-[400px] mx-auto rounded-full"
        /> 
      </div>
      <div className="w-1/2 flex flex-col gap-5 justify-center">
        <p className="text-5xl font-semibold">{user.username}</p>
        <div className="flex gap-6">
          <div className="flex flex-col gap-1 items-center justify-center text-3xl">
            <p>{user.posts}</p>
            <p>Posts</p>
          </div>
          <div className="flex flex-col gap-1 items-center justify-center text-3xl">
            <p>{user.followers}</p>
            <p>Followers</p>
          </div>
          <div className="flex flex-col gap-1 items-center justify-center text-3xl">
            <p>{user.following}</p>
            <p>Following</p>
          </div>
        </div>
        <p className="text-3xl">{user.bio}</p>
      </div>
    </div>
  );
};

const MemeGrid = () => {
  return (
    <ul className="grid grid-cols-4 border-t-2 border-gray-500 py-10">
      {user.uploaded_memes &&
        user.uploaded_memes.map((meme, index) => (
          <MemeCard key={index} meme={meme} />
        ))}
    </ul>
  );
};

const MemeCard = ({ meme }) => {
  const [islike, setIsLike] = useState(false);
  return (
    <li className="mx-auto mb-10">
      <img
        src={meme.url}
        alt={meme.title}
        className="mix-blend-color-dodge w-[250px] border h-[250px]"
      />

      <div className="flex justify-between">
        <p>{meme.title}</p>
        <p>Views: {meme.views}</p>
      </div>
      <div className="flex justify-between">
        <button onClick={() => setIsLike(!islike)}>
          {islike ? <FaHeart /> : <FaRegHeart/>} {meme.likes}
        </button>
        <button><FaComment/>{meme.comments.length}</button>
        <button><PiShareFatFill/>{meme.shares}</button>
      </div>
    </li>
  );
};

const UserProfilePage = () => {
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Fetch user data from API
  //   setLoading(false);
  // }, []);

  if (!loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="mb-16">
      <UserProfileHeader />
      <MemeGrid />
    </div>
  );
};

export default UserProfilePage;
