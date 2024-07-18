import React from 'react';
import './Cube.css';

const Cube = ({ topImage, experience, year }) => {

  const handleFaceClick = (event) => {
    const face = event.currentTarget;
    const angle = (Math.random() * 360) * (Math.PI / 180);
    const radius = Math.random() * 500;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    const z = (Math.random() - 0.5) * 500;
    face.style.transform = `translate3d(${x}px, ${y}px, ${z}px) rotateX(${Math.random() * 360}deg) rotateY(${Math.random() * 360}deg)`;
    face.classList.add('hidden'); //umer
  }; 

  return (
    <div className="container">
      <div className="cube">
        <div className="face top" onClick={handleFaceClick}><div className='red-dice'><p></p></div></div>
        <div className="face bottom" onClick={handleFaceClick}>
            <div className='red-dice'><p></p></div>
        </div>
        <div className="face left" onClick={handleFaceClick}><div className='blue-dice'><p></p></div></div>
        <div className="face right" onClick={handleFaceClick}><p style={{ fontSize: "1.2rem", color: "black" }}>{year}</p>        </div>
        <div className="face front" onClick={handleFaceClick}>
          {topImage ? <img src={topImage} alt="Top face" style={{ width: '100%', height: '100%' }} /> : 'Top'}
        </div>
        <div className="face back" onClick={handleFaceClick}>
          <p style={{ fontSize: "1.2rem", color: "black" }}>{experience}</p>
        </div>
      </div>
    </div>
  );
};

export default Cube;
