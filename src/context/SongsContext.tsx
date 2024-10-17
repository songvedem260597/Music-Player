import React, { createContext, useState, useContext, ReactNode } from "react";
interface Song {
  audioUrl: string;
  lyricsUrl: string;
  title: string;
  artist: string;
  avatar: string;
}
interface SongContextProps {
  songs: Song[];
  setSongs: React.Dispatch<React.SetStateAction<Song[]>>;
}

interface SongProviderProps {
  children: ReactNode;
}

const SongContext = createContext<SongContextProps | undefined>(undefined);

export const SongProvider: React.FC<SongProviderProps> = ({ children }) => {
  const [songs, setSongs] = useState<any[]>([]);

  return (
    <SongContext.Provider value={{ songs, setSongs }}>
      {children}
    </SongContext.Provider>
  );
};

export const useSongContext = () => {
  const context = useContext(SongContext);
  if (!context) {
    throw new Error("useSongContext must be used within a SongProvider");
  }
  return context;
};
