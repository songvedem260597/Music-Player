import React from "react";
import Slide from "../components/Layouts/Slide";
import Carousel from "../components/Layouts/Carousel";
import slide_1 from "../assets/images/slide_1.png";
import slide_2 from "../assets/images/slide_2.png";
import slide_3 from "../assets/images/slide_3.png";
import slide_4 from "../assets/images/slide_4.png";
import Banner_1 from "../assets/images/Lung lay_banner.jpg";
import SongList from "../components/SongList";

const Home = () => {
  const generalSlides = [slide_1, slide_2, slide_3, slide_4];
  const bannerSlides = [Banner_1];

  const songs = [
    {
      musicUrl: 'http://localhost/svdmusic/public/uploads/mp3/Lung lay.mp3',
      lrcUrl: 'http://localhost/svdmusic/public/uploads/lrc/Lung lay.lrc',
      name: 'Lung lay',
      creator: 'Cukak',
      avatarUrl: 'http://localhost/svdmusic/public/uploads/image_song/Lung lay.jpg',
      bannerUrl: 'http://localhost/svdmusic/public/uploads/banner_song/Lung lay_banner.jpg',
      id: 39,
      index: 0,
    },
    {
      musicUrl: 'http://localhost/svdmusic/public/uploads/mp3/Lung lay.mp3',
      lrcUrl: 'http://localhost/svdmusic/public/uploads/lrc/Lung lay.lrc',
      name: 'Lung lay',
      creator: 'Cukak',
      avatarUrl: 'http://localhost/svdmusic/public/uploads/image_song/Lung lay.jpg',
      bannerUrl: 'http://localhost/svdmusic/public/uploads/banner_song/Lung lay_banner.jpg',
      id: 39,
      index: 0,
    },
    {
      musicUrl: 'http://localhost/svdmusic/public/uploads/mp3/Lung lay.mp3',
      lrcUrl: 'http://localhost/svdmusic/public/uploads/lrc/Lung lay.lrc',
      name: 'Lung lay',
      creator: 'Cukak',
      avatarUrl: 'http://localhost/svdmusic/public/uploads/image_song/Lung lay.jpg',
      bannerUrl: 'http://localhost/svdmusic/public/uploads/banner_song/Lung lay_banner.jpg',
      id: 39,
      index: 0,
    },
    {
      musicUrl: 'http://localhost/svdmusic/public/uploads/mp3/Lung lay.mp3',
      lrcUrl: 'http://localhost/svdmusic/public/uploads/lrc/Lung lay.lrc',
      name: 'Lung lay',
      creator: 'Cukak',
      avatarUrl: 'http://localhost/svdmusic/public/uploads/image_song/Lung lay.jpg',
      bannerUrl: 'http://localhost/svdmusic/public/uploads/banner_song/Lung lay_banner.jpg',
      id: 39,
      index: 0,
    },
    {
      musicUrl: 'http://localhost/svdmusic/public/uploads/mp3/Lung lay.mp3',
      lrcUrl: 'http://localhost/svdmusic/public/uploads/lrc/Lung lay.lrc',
      name: 'Lung lay',
      creator: 'Cukak',
      avatarUrl: 'http://localhost/svdmusic/public/uploads/image_song/Lung lay.jpg',
      bannerUrl: 'http://localhost/svdmusic/public/uploads/banner_song/Lung lay_banner.jpg',
      id: 39,
      index: 0,
    },
    {
      musicUrl: 'http://localhost/svdmusic/public/uploads/mp3/Lung lay.mp3',
      lrcUrl: 'http://localhost/svdmusic/public/uploads/lrc/Lung lay.lrc',
      name: 'Lung lay',
      creator: 'Cukak',
      avatarUrl: 'http://localhost/svdmusic/public/uploads/image_song/Lung lay.jpg',
      bannerUrl: 'http://localhost/svdmusic/public/uploads/banner_song/Lung lay_banner.jpg',
      id: 39,
      index: 0,
    },
  ];

  return (
    <div className="main-content">
      <Slide />
      <div className="wrapper-content">
        <div className="ms-suggestion-song">
          <p className="title-suggestion">Gợi Ý Hôm Nay</p>
          <Carousel aspectRatio="16/9" slidesToShow={6} itemCount={6} slides={generalSlides}  />
        </div>
        <div className="ms-suggestion-song">
          <p className="title-suggestion">Thể loại</p>
          <Carousel aspectRatio="16/9" slidesToShow={6} itemCount={6} slides={generalSlides} />
        </div>
        <div className="ms-suggestion-song">
          <p className="title-suggestion">Nhạc mới</p>
          <Carousel aspectRatio="16/9" slidesToShow={3} itemCount={3} slides={bannerSlides} />
        </div>
        <div className="ms-list-song">
          <div className="wrap-list-song">
            <SongList songs={songs} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
