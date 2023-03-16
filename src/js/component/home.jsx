import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [color, setColor] = useState("");
  const [wantPurple, setWantPurple] = useState(true)
  

  return wantPurple ? (
	<div className="sign">
        <div className="stick"></div>
        <div className="traficLigth">
            <div onClick={() => setColor("red")} className={(color === "red") ? "ligth red my-2 glowred" : "ligth red my-2"}></div>
            <div onClick={() => setColor("yellow")} className={(color === "yellow" ? "ligth yellow my-2 glowyellow" : "ligth yellow my-2 ")}></div>
            <div onClick={() => setColor("green")} className={(color === "green") ? "ligth green my-2 glowgreen" : "ligth green my-2"}></div>
        </div> <br />
		<button type="button" className="btn btn-primary" onClick={() => (setWantPurple(false))  (setColor(''))}>Click to show purple light</button>
    </div>
  ) : (<div className="sign">
  <div className="stick"></div>
  <div className="traficLigth">
	  <div onClick={() => setColor("red")} className={(color === "red") ? "ligth red my-2 glowred" : "ligth red my-2"}></div>
	  <div onClick={() => setColor("yellow")} className={(color === "yellow" ? "ligth yellow my-2 glowyellow" : "ligth yellow my-2 ")}></div>
	  <div onClick={() => setColor("green")} className={(color === "green") ? "ligth green my-2 glowgreen" : "ligth green my-2"}></div>
	  <div onClick={() => setColor("purple")} className={(color === "purple") ? "ligth purple my-2 glowpurple" : "ligth purple my-2"}></div>
  </div> <br />
  <button type="button" className="btn btn-warning" onClick={() => setWantPurple(true)}>Click to hide purple light</button>
</div>);
    
};

export default Home;
