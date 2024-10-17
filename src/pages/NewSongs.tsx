import React from "react";
import { useSongContext } from "../context/SongsContext";
import API from "../services/api";
const NewSongs = () => {
  const { setSongs } = useSongContext();
  const handleNewSongsSelect = async () => {
    try {
      const response = await API.get(`/audio`);
      setSongs(response.data.songs);
    } catch (error) {
      console.error("Error fetching songs for the new songs", error);
    }
  };

  return (
    <div>
      <h1>Select an song</h1>
      <p>
        <button onClick={() => handleNewSongsSelect()}>Bạc Phận</button>
      </p>
    </div>
  );
};

export default NewSongs;
