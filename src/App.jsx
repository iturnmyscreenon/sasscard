import React, { useState } from "react";
import "./App.scss";
import jouer from "./assets/jouer.png";
import backward from "./assets/backward-arrows-couple.png";
import forward from "./assets/fast-forward.png";
import booba from "./assets/booba-dkr-clip.jpg";

function App() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <section className="container">
      <div className="card">
        <img src={booba} alt="booba" />
        <div className="card-head">
          <div className="card-info">
            <h1 className="card-title">DKR</h1>
            <h2 className="card-singer">Booba</h2>

          </div>
          <div type="button" onClick={() => setIsClicked(!isClicked)}>
          </div>
        </div>
        <div className="playlist-navigation">
          <div className="progress-bar">
            <div className="progress"></div>
          </div>
          <div className="music-timestamps">
            <p className="music-timestamp">0:00</p>
            <p className="music-timestamp">4:19</p>
          </div>
          <div className="navigation-menu">
            <img src={backward} alt="backward" />
          <img className="jouer" src={jouer}></img>
            <img src={forward} alt="forward" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default App;