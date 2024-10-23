import React from "react";
import Slide from "../components/Layouts/Slide";
import Carousel from "../components/Layouts/Carousel";
import slide_1 from "../assets/images/slide_1.png";
import slide_2 from "../assets/images/slide_2.png";
import slide_3 from "../assets/images/slide_3.png";
import slide_4 from "../assets/images/slide_4.png";
import SongList from "../components/SongList";
import MusicTop  from "../components/Layouts/MusicTop";


const Home = () => {
  const generalSlides = [slide_1, slide_2, slide_3, slide_4];
  const songs = [
    {
      musicUrl: 'https://songvedem260597.github.io/assets/mp3/bac_phan_remix.mp3',
      lrcUrl: 'https://songvedem260597.github.io/assets/lrc/bac_phan_remix.lrc',
      name: 'Bạc phận',
      creator: 'Masew',
      avatarUrl: 'https://songvedem260597.github.io/assets/avatar/bac_phan.jpg',
      bannerUrl: 'https://songvedem260597.github.io/assets/avatar/bac_phan.jpg',
      id: 1,
      index: 0,
    },
    {
      musicUrl: 'https://songvedem260597.github.io/assets/mp3/tinh_co_yeu_em.mp3',
      lrcUrl: 'https://songvedem260597.github.io/assets/lrc/tinh_co_yeu_em.lrc',
      name: 'Tình cờ yêu em',
      creator: 'Huy Thộn',
      avatarUrl: 'https://songvedem260597.github.io/assets/avatar/tinh_co_yeu_em.jpg',
      bannerUrl: 'https://songvedem260597.github.io/assets/avatar/tinh_co_yeu_em.jpg',
      id: 2,
      index: 1,
    },
    {
      musicUrl: 'https://songvedem260597.github.io/assets/mp3/cung_danh_thoi.mp3',
      lrcUrl: 'https://songvedem260597.github.io/assets/lrc/cung_danh_thoi.lrc',
      name: 'Cũng đành thôi',
      creator: 'Đức Phúc',
      avatarUrl: 'https://songvedem260597.github.io/assets/avatar/cung_danh_thoi.jpg',
      bannerUrl: 'https://songvedem260597.github.io/assets/avatar/cung_danh_thoi.jpg',
      id: 3,
      index: 2,
    },
    {
      musicUrl: 'https://songvedem260597.github.io/assets/mp3/thac_mac.mp3',
      lrcUrl: 'https://songvedem260597.github.io/assets/lrc/thac_mac.lrc',
      name: 'Thắc mắc',
      creator: 'Thịnh suy',
      avatarUrl: 'https://songvedem260597.github.io/assets/avatar/thac_mac.jpg',
      bannerUrl: 'https://songvedem260597.github.io/assets/avatar/thac_mac.jpg',
      id: 4,
      index: 3,
    },
    {
      musicUrl: 'https://songvedem260597.github.io/assets/mp3/somewhere_only_we_know.mp3',
      lrcUrl: 'https://songvedem260597.github.io/assets/lrc/somewhere_only_we_know.lrc',
      name: 'Somewhere Only We Know',
      creator: 'Rhianne Cover',
      avatarUrl: 'https://songvedem260597.github.io/assets/avatar/somewhere_only_we_know.jpg',
      bannerUrl: 'https://songvedem260597.github.io/assets/avatar/somewhere_only_we_know.jpg',
      id: 5,
      index: 4,
    },
    {
      musicUrl: 'https://songvedem260597.github.io/assets/mp3/gods.mp3',
      lrcUrl: 'https://songvedem260597.github.io/assets/lrc/gods.lrc',
      name: 'Gods',
      creator: 'NewJeans (뉴진스)',
      avatarUrl: 'https://songvedem260597.github.io/assets/avatar/gods.jpg',
      bannerUrl: 'https://songvedem260597.github.io/assets/avatar/gods.jpg',
      id: 6,
      index: 5,
    }
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
        <div className="ms-suggestion-song ms-top-song">
          <p className="title-suggestion">Nhạc mới</p>
          <MusicTop />
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
