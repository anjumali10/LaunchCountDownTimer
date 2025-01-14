import React from "react";
import CountdownTimer from "./components/CountdownTimer";
import bgHills from "./assets/pattern-hills.svg";
import bgStars from "./assets/bg-stars.svg";
import fbIcon from "./assets/icon-facebook.svg";
import fbIconHover from "./assets/icon-fbhover.svg"
import pinterestIcon from "./assets/icon-pinterest.svg";
import pinthover from "./assets/icon-pinthover.svg"
import instagramIcon from "./assets/icon-instagram.svg";
import instahover from "./assets/icon-instahover.svg"

const App = () => {
  return (
    <>
      <div className="flex justify-center items-center font-redHat">
        <div className="bg">
          <img className="bg-vdblue" src={bgStars} alt="bg-stars" />
        </div>
        <p className="text-white text-lg font-redHat font-bold uppercase absolute top-20 z-10 tracking-custom">We're Launching Soon</p>
        {/* countDownTimer */}
        <div className="timer absolute">
        <CountdownTimer/>
        </div>
        {/* Footer */}
        <div className="footer absolute bottom-0 flex justify-center">
          <img src={bgHills} alt="bgHills" />
          <div className="icons absolute bottom-10 flex gap-10">
            <img className="text-gblue fill-current hover:fill-softred cursor-pointer" src={fbIcon} alt="fbicon"
            onMouseEnter={(e) => (e.currentTarget.src = fbIconHover)}
            onMouseLeave={(e) => (e.currentTarget.src = fbIcon)}
            />
            <img className="text-gblue fill-current hover:fill-softred cursor-pointer" src={pinterestIcon} alt="pinterestIcon" 
            onMouseEnter={(e) => (e.currentTarget.src = pinthover)}
            onMouseLeave={(e) => (e.currentTarget.src = pinterestIcon)}
            />
            <img className="text-gblue fill-current hover:fill-softred cursor-pointer" src={instagramIcon} alt="instagramIcon" 
            onMouseEnter={(e) => (e.currentTarget.src = instahover)}
            onMouseLeave={(e) => (e.currentTarget.src = instagramIcon)}
            />
          </div>
        </div>
      </div>
      {/* <CountdownTimer/> */}
    </>
  );
};

export default App;
