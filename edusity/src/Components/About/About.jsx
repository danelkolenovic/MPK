import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>O FAKULTETU</h3>
        <h2>Razvijamo lidere budućnosti – već danas</h2>
        <p>
          Krenite na transformativno obrazovno putovanje uz sveobuhvatne
          programe naše univerziteta. Naš savremeni kurikulum osmišljen je da
          osnaži studente znanjem, veštinama i iskustvom neophodnim za uspeh u
          dinamičnoj oblasti obrazovanja.
        </p>
        <p>
          Sa fokusom na inovacije, praktično učenje i personalizovano
          mentorstvo, naši programi pripremaju buduće vaspitače da ostave
          značajan trag u učionicama, školama i zajednicama.
        </p>
        <p>
          Bilo da želite da postanete nastavnik, administrator, savetnik ili
          obrazovni lider, naša raznovrsna ponuda programa pruža savršen put ka
          ostvarenju vaših ciljeva i otključavanju punog potencijala u
          oblikovanju budućnosti obrazovanja.
        </p>
      </div>
    </div>
  );
};

export default About;
