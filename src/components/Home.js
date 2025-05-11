import React from "react";
import plantImg from "../images/plant.jpg";

function Home() {
  return (
    <div className="center" style ={{ 
      backgroundImage: `url(${plantImg})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '100vh', // Adjust as needed
      width: '100vw'  // Adjust as needed
    }}>
      In this application you can detect a plant health by uploading image.
     
      
    </div>
  );
}

export default Home;
