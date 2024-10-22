import React from 'react';
import '../assets/scss/SongList.scss'; // Add your styles here

interface SongProps {
  musicUrl: string;
  lrcUrl: string;
  name: string;
  creator: string;
  avatarUrl: string;
  bannerUrl: string;
  id: number;
  index: number;
}

const SongItem: React.FC<SongProps> = ({ musicUrl, lrcUrl, name, creator, avatarUrl, bannerUrl, id, index }) => {
  return (
    <li className="list-music-item" data-music={musicUrl} data-lrc={lrcUrl} data-name={name} data-creator={creator} data-avatar={avatarUrl} data-img={bannerUrl} data-index={index} data-id={id}>
      <div className="equalizer-and-number">
        <p className="number-item">{index + 1}</p>
      </div>
      <div className="list-music-item-info">
        <div className="avatar">
          <div className="btn-play">
            <span className="material-icons">play_arrow</span>
          </div>
          <div className="over-lay-item-info"></div>
          <img onError={(e) => (e.currentTarget.src = 'http://localhost/svdmusic/public/uploads/image_song/song_default.jpg')} src={avatarUrl} alt={name} />
        </div>
        <div className="item-info">
          <div className="name">{name}</div>
          <div className="creator">{creator}</div>
        </div>
        <div className="item-control">
          <a href='#'>
            <span className="play-lyrics material-icons-outlined">mic_none</span>
          </a>
          <a href='#'>
            <span className="add-playlist material-icons-outlined">playlist_add</span>
          </a>
        </div>
      </div>
    </li>
  );
};

interface SongListProps {
  songs: SongProps[];
}

const SongList: React.FC<SongListProps> = ({ songs }) => {
  return (
    <ul className="list-music">
      {songs.map((song, index) => (
        <SongItem key={song.id} {...song} index={index} />
      ))}
    </ul>
  );
};

export default SongList;
