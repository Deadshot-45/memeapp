import React, { useState, useEffect } from "react";

function MemeExplorerPage({loading, memes}) {
  const [search, setSearch] = useState("");
console.log(memes);
  const handleSearch = (event) => {
  event.preventDefault();
  const formData = event.target[0].value;
  setSearch(formData)
};
 

  return (
    <div className="">
      <h1>Meme Explorer</h1>
      <form className="space-x-3 mb-10" onSubmit={(e)=>handleSearch(e)}>
        <input
          type="text"
          placeholder="Search memes"
          className="border outline-none px-3 py-1 rounded-3xl"
        />
        <button type="submit" className="rounded-3xl">search</button>
      </form>
      <div>
        <h1>Trending Memes</h1>
        {loading ? (
          <p>Loading...</p>
        ) : search && search.length > 3 ? (
          <MemeList
            memes={memes.filter((meme) =>
              meme.name.toLowerCase().includes(search.toLowerCase())
            )}
          />
        ) : (
          <MemeList memes={memes} />
        )}
      </div>
    </div>
  );
}

export default MemeExplorerPage;

const MemeList = ({ memes }) => {
  return (
    <ul className="grid grid-cols-5 space-y-10">
      {memes && memes.map((meme) => (
        <li
          key={meme.id}
          className="flex flex-col w-[200px] justify-between mx-auto"
        >
          <img src={meme.url} alt={meme.name} className="w-[200px] h-[200px] border" />
          <p>{meme.name}</p>
        </li>
      ))}
    </ul>
  );
};
