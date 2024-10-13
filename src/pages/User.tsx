import React, { useRef, useState, useEffect } from "react";

// Định nghĩa kiểu dữ liệu cho lyrics
interface Lyric {
  time: number; // Thời gian
  text: string; // Nội dung lời bài hát
}

// Sample LRC data
const lrcData = `
[00:01.23]Một chiều đông trên phố
[00:04.95]Tình cờ nhìn thấy em
[00:09.20]Tình cờ ánh mắt quen oh
[00:14.78]Tình cờ
[00:17.98]Để rồi mưa nhung nhớ
[00:22.49]Để rồi lá lay đưa
[00:27.29]Để rồi anh
[00:30.48]Tình cờ nhớ em
[00:37.12]Anh đã mơ tới ngày đôi mình chung lối nhưng biết sao giờ em ơi
[00:43.51]Ta ở hai nơi hah tim này tim anh chơi vơi
[00:52.53]Hah hah đêm về mong nhớ
[00:56.51]Không xong rồi anh lỡ trao trái tim này bơ vơ
[01:01.03]Mơ từng đêm mơ phải làm sao đây
[01:11.39]Và anh đã ước là đã ước là đã ước là
[01:15.10]Được cầm tay sánh bước và đứng trước nhà khẽ nói là
[01:19.62]Là la lá lá là khẽ nói tâm tư bao ngày qua
[01:25.66]Tâm tư bao ngày qua (hah uh)
[01:28.65]Và anh đã ước gì đã ước gì đã ước gì
[01:32.63]Ước gì sẽ được bên em dù ngày hay đêm chẳng cần chi thêm
[01:36.88]Và được hôn làn tóc mềm vì anh đã tình cờ yêu em (yeah oh)
[01:43.57]Tình cờ là ey
[01:47.25]Anh không hề muốn nhớ đấy là chưa dám quên
[01:51.50]Anh là tiền đạo cắm mãi chỉ đợi bóng dáng em
[01:56.01]Hai ba cái con cừu chắc phải đếm hết đêm
[02:00.00]Khi mà anh vừa đưa môi và nhấp trà ăn một chiếc kẹo lạc mất em
[02:04.78]Trong tim thì lệ đổ nhưng mà gượng cười lại bảo là không đau
[02:09.04]Anh có đi chạy xe thì cũng sẽ không bao giờ được em ôm đâu
[02:13.54]Chắc là do anh đen đen nhưng mà không vâu
[02:17.26]Khi mà em là thành viên trong cái đội trap nhưng mà anh lại tưởng em là cô dâu
[02:22.32]Anh đã mơ tới ngày đôi mình chung lối nhưng biết sao giờ em ơi
[02:28.94]Ta ở hai nơi hah tim này tim anh chơi vơi
[02:37.72]Hah hah đêm về mong nhớ
[02:41.96]Không xong rồi anh lỡ trao trái tim này bơ vơ
[02:46.75]Mơ từng đêm mơ phải làm sao đây hả em ơi
[02:56.30]Và anh đã ước là đã ước là đã ước là
[03:00.55]Được cầm tay sánh bước và đứng trước nhà khẽ nói là
[03:05.07]Là la lá lá là khẽ nói tâm tư bao ngày qua
[03:11.44]Tâm tư bao ngày qua (hah hah huh oh)
[03:14.10]Và anh đã ước gì đã ước gì đã ước gì
[03:18.09]Ước gì sẽ được bên em dù ngày hay đêm chẳng cần chi thêm
[03:22.34]Và được hôn làn tóc mềm vì anh đã tình cờ yêu em
[03:31.90]Và anh muốn nói muốn nói ra
[03:40.93]Hết bao điều từ trong lòng anh chôn giấu đã lâu
[03:48.91]Và anh muốn hát muốn hát lên
[03:58.46]Hát lên rằng rằng anh đã tình cờ yêu em
[04:07.23]Nói bao điều rằng em có nhận lời yêu anh...
`;

// Hàm phân tích dữ liệu LRC
const parseLrc = (lrcText: string): Lyric[] => {
  const lines = lrcText.split("\n");
  return lines
    .map((line) => {
      const match = line.match(/\[(\d{2}):(\d{2})\.(\d{2})\](.*)/);
      if (match) {
        const minutes = parseInt(match[1], 10);
        const seconds = parseInt(match[2], 10);
        const milliseconds = parseInt(match[3], 10);
        const time = minutes * 60 + seconds + milliseconds / 1000;
        const text = match[4].trim();
        return { time, text };
      }
      return null; // Trả về null nếu không tìm thấy
    })
    .filter((item): item is Lyric => item !== null); // Lọc các giá trị null
};

const AudioPlayer = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [lyrics, setLyrics] = useState<Lyric[]>([]);
  const [currentLyricIndex, setCurrentLyricIndex] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const lyricsRef = useRef<HTMLDivElement | null>(null); // ref cho danh sách lyrics
  const [isPlaying, setIsPlaying] = useState(false); // State để theo dõi trạng thái phát nhạc

  // Phân tích lyrics khi component mount
  useEffect(() => {
    const parsedLyrics = parseLrc(lrcData);
    setLyrics(parsedLyrics);

    // Cuộn đến lời bài hát đầu tiên khi bắt đầu
    if (parsedLyrics.length > 0 && lyricsRef.current) {
      const firstLyric = lyricsRef.current.children[0];
      if (firstLyric) {
        // Lấy chiều cao container và lyric đầu tiên
        const containerHeight = lyricsRef.current.clientHeight;
        const firstLyricHeight = firstLyric.clientHeight;

        // Tính toán vị trí scrollTop để lyric đầu tiên nằm ở giữa container
        const scrollTop =
          firstLyric.getBoundingClientRect().top -
          lyricsRef.current.getBoundingClientRect().top +
          lyricsRef.current.scrollTop -
          containerHeight / 2 +
          firstLyricHeight / 2;

        // Cuộn đến vị trí đã tính toán với hiệu ứng mượt
        lyricsRef.current.scrollTo({ top: scrollTop, behavior: "smooth" });
      }
    }
  }, []);

  // Cập nhật chỉ số lời bài hát hiện tại
  useEffect(() => {
    const current = lyrics
      .filter((lyric) => lyric && currentTime >= lyric.time)
      .pop();

    if (current) {
      const index = lyrics.indexOf(current);
      setCurrentLyricIndex(index); // Cập nhật chỉ số lời bài hát hiện tại
    }
  }, [currentTime, lyrics]);

  // Cuộn đến lời bài hát hiện tại
  useEffect(() => {
    if (currentLyricIndex !== null && lyricsRef.current) {
      const activeLyric = lyricsRef.current.children[currentLyricIndex];
      if (activeLyric) {
        // Lấy chiều cao container và lyric đang active
        const containerHeight = lyricsRef.current.clientHeight;
        const activeLyricHeight = activeLyric.clientHeight;

        // Tính toán vị trí scrollTop để lyric đang active nằm ở giữa container
        const activeLyricOffset =
          activeLyric.getBoundingClientRect().top -
          lyricsRef.current.getBoundingClientRect().top;

        // Tính toán vị trí scrollTop để lyric đang active nằm ở giữa container
        const scrollTop =
          activeLyricOffset +
          lyricsRef.current.scrollTop -
          containerHeight / 2 +
          activeLyricHeight / 2;

        // Cuộn đến vị trí đã tính toán với hiệu ứng mượt
        lyricsRef.current.scrollTo({ top: scrollTop, behavior: "smooth" });
      }
    }
  }, [currentLyricIndex]);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play(); // Phát nhạc
      setIsPlaying(true); // Cập nhật trạng thái phát nhạc
    }
  };

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause(); // Tạm dừng nhạc
      setIsPlaying(false); // Cập nhật trạng thái phát nhạc
    }
  };

  return (
    <div>
      <audio
        ref={audioRef}
        src="https://songvedem260597.github.io/assets/mp3/tinh_co_yeu_em.mp3"
        onLoadedMetadata={() => {
          if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
          }
        }}
      />
      <div>
        <button onClick={handlePlay} disabled={isPlaying}>Play</button>
        <button onClick={handlePause} disabled={!isPlaying}>Pause</button>
      </div>
      <div className="lyrics" ref={lyricsRef}>
        {lyrics.map((lyric, index) => (
          <div
            key={index}
            className={`lyric ${currentLyricIndex === index ? "active" : ""}`}
          >
            {lyric.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AudioPlayer;
