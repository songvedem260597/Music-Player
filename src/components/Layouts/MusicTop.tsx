import "../../assets/scss/MusicTop.scss";
import Banner_1 from "../../assets/images/thang_dien_banner.jpg";
import Banner_2 from "../../assets/images/bac_phan_remix_banner.jpg";
import Banner_3 from "../../assets/images/buoc_qua_nhau_banner.jpg";

const MusicTop = () =>{
    return (
        <div className="carousel-new-song top-ranking-song">
            <li className="list-music-top" >
                <div className="item">
                    <div className="number-new-song">
                        <h2 className="number-rank-song">#1</h2>
                    </div>
                    <div className="wrapper-suggestion">
                        <span className="material-icons flex-center">play_arrow</span>
                        <div className="overlay"></div>
                        <img height="190" src={Banner_2} />
                    </div>
                    <div className="info-new-song">
                        <div className="name">Bạc phận</div>
                        <div className="creator">Masew</div>
                    </div>
                </div>
            </li>
            <li className="list-music-top" >
                <div className="item">
                    <div className="number-new-song">
                        <h2 className="number-rank-song">#2</h2>
                    </div>
                    <div className="wrapper-suggestion">
                        <span className="material-icons flex-center">play_arrow</span>
                        <div className="overlay"></div>
                        <img height="190" src={Banner_1} />
                    </div>
                    <div className="info-new-song">
                        <div className="name">Thằng điên</div>
                        <div className="creator">Justatee x Phương Ly</div>
                    </div>
                </div>
            </li>
            <li className="list-music-top" >
                <div className="item">
                    <div className="number-new-song">
                        <h2 className="number-rank-song">#3</h2>
                    </div>
                    <div className="wrapper-suggestion">
                        <span className="material-icons flex-center">play_arrow</span>
                        <div className="overlay"></div>
                        <img height="190" src={Banner_3} />
                    </div>
                    <div className="info-new-song">
                        <div className="name">Bước qua nhau</div>
                        <div className="creator">Vũ</div>
                    </div>
                </div>
            </li>
        </div>
    );
}

export default MusicTop;