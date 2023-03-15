import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [color, setColor] = useState("");

  return (
    <>
      <div className="sign">
        <div className="stick"></div>
        <div className="traficLigth">
          <div onClick={() => setColor("red")} className={(color === "red") ? "ligth red my-2 glowred" : "ligth red my-2"}></div>
          <div onClick={() => setColor("yellow")} className={(color === "yellow" ? "ligth yellow my-2 glowyellow" : "ligth yellow my-2 ")}></div>
          <div onClick={() => setColor("green")} className={(color === "green") ? "ligth green my-2 glowgreen" : "ligth green my-2"}></div>
        </div>
      </div>
    </>
  );
};

export default Home;
