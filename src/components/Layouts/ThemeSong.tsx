import "../../assets/scss/ThemeSong.scss";
import Theme_1 from "../../assets/images/area_1.png";
import Theme_2 from "../../assets/images/area_2.png";
import Theme_3 from "../../assets/images/area_3.png";
const ThemeSong = () =>{
    return (
        <div className="ms-theme-of-song">
            <div className="owl-carousel carousel-area-song">
                <div className="item">
                    <a href="#">
                        <div className="wrapper-theme-song-img">
                            <img src={Theme_1} />
                        </div>
                    </a>
                </div>
                <div className="item">
                    <a href="#">
                        <div className="wrapper-theme-song-img">
                            <img src={Theme_2} />
                        </div>
                    </a>
                </div>
                <div className="item">
                    <a href="#">
                        <div className="wrapper-theme-song-img">
                            <img src={Theme_3} />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ThemeSong;