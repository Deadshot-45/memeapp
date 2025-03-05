import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./containers/Home";
import LeaderboardPage from "./containers/LeaderboardPage";
import MemeDetailsPage from "./containers/MemeDetailsPage";
import MemeExplorerPage from "./containers/MemeExplorerPage";
import NotFoundPage from "./containers/NotFoundPage";
import UserProfilePage from "./containers/UserProfilePage";
import MemeUploadPage from "./containers/MemeUploadPage";
import NavBar from "./containers/NavBar";
import MemePage from "./containers/MemePage";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [memes, setMemes] = useState([]);
  const [meme, setMeme] = useState()
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`https://api.imgflip.com/get_memes`)
      .then((response) => {
        console.log(response.data.data.memes);
        setMemes(response.data.data.memes);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    if (storedDarkMode === "true") {
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", darkMode ? "false" : "true");
  };

  return (
    <div className={`w-full ${darkMode ? "dark-mode" : ""}`}>
      <NavBar toggleDarkMode={toggleDarkMode} />
      <main className="w-[90%] mx-auto">
        <Routes>
          <Route path="/" element={<Home loading={loading} memes={memes} setMeme={setMeme}/>} />
          <Route path="/memeexplorer" element={<MemeExplorerPage loading={loading} memes={memes}/>} />
          <Route path="/memeupload" element={<MemeUploadPage memes={memes} setMemes={setMemes}/>} />
          <Route path="/meme/:id" element={<MemeDetailsPage />} />
          <Route path="/userprofile" element={<UserProfilePage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/memepage" element={<MemePage meme={meme}/>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
