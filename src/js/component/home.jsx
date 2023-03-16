import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [color, setColor] = useState("");
  const [wantPurple, setWantPurple] = useState(true)

  function refreshPage() {
    window.location.reload(false);
  }

  const handleClick = () => {
    setInterval(() => {
      setColor('red');
    }, 1000);
	setInterval(() => {
		setColor('yellow');
	}, 2000);
	setInterval(() => {
		setColor('green');
	}, 3000);
  }
  

  return wantPurple ? (
	<div className="sign">
        <div className="stick mt-3"></div>
        <div className="traficLigth">
            <div onClick={() => setColor("red")} className={(color === "red") ? "ligth red my-2 glowred" : "ligth red my-2"}></div>
            <div onClick={() => setColor("yellow")} className={(color === "yellow" ? "ligth yellow my-2 glowyellow" : "ligth yellow my-2 ")}></div>
            <div onClick={() => setColor("green")} className={(color === "green") ? "ligth green my-2 glowgreen" : "ligth green my-2"}></div>
        </div> <br />
		<button type="button" className="btn btn-primary" onClick={() => setWantPurple(false)}>Click to show purple light</button>
		<button type="button" className="btn btn-success mx-1" onClick={handleClick}>test ligths</button>
		<button type="button" className="btn btn-secondary my-1" onClick={refreshPage}>click to refresh page(stop test)</button>
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
  <button type="button" className="btn btn-success mx-1" onClick={handleClick}>test ligths</button>
  <button type="button" className="btn btn-secondary my-1" onClick={refreshPage}>click to refresh page(stop test)</button>
</div>);
    
};

export default Home;
