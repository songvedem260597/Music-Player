import React from "react";
import { useSongContext } from "../context/SongsContext";
import API from "../services/api";
const Artist = () => {
  const { setSongs } = useSongContext();
  const handleArtistSelect = async (artistId: string) => {
    try {
      const response = await API.get(`/artists/${artistId}`);
      setSongs(response.data.songs);
    } catch (error) {
      console.error("Error fetching songs for the artist", error);
    }
  };

  return (
    <div style={{ paddingTop: '100px' }}>
      <h1>Select an Artist</h1>
      <p>
        <button onClick={() => handleArtistSelect("1")}>Artist 1</button>
      </p>
      <p>
        <button onClick={() => handleArtistSelect("2")}>Artist 2</button>
      </p>
    </div>
  );
};

export default Artist;
