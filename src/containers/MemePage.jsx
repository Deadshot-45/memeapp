import React from "react";

const MemePage = ({meme}) => {
    console.log(meme);
  return (
    <div className="flex border">
      <div className="w-1/2">
        <h1 className="text-3xl">Meme Page</h1>
        <img
          src={meme.avatar}
          alt={meme.user}
          className="mix-blend-color-dodge w-[400px] h-[400px] mx-auto"
        />
      </div>

      <div className="">
        <h1 className="text-3xl">{meme.user}</h1>
        <p>Views : {meme.views}</p>
        <p>likes : {meme.likes}</p>
        <div>
          {meme.comments?.map((comment) => (
            <div key={comment.id}>
              <p>{comment.username}</p>
              <p>{comment.likes}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MemePage;
