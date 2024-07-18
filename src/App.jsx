import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import SparrowModel from "./sparrow";
import "./App.css";
import Heading from "./headings";
import ThemeToggle from "./themetoggle";
import Cube from "./Cube";
import react from "./assets/react.svg"; // Make sure to replace this with the actual path to your image
import nextJS from "./assets/next.png"
import redux from "./assets/redux.png"
import jQuery from "./assets/JQuery.png"
function App() {
  let arrayofObjects = [{
    "topImage": react,
    "experience": "2 Years",
    "year": "2022"
  },
  {
    "topImage": nextJS,
    "experience": "1 Years",
    "year": "2023"
  },
  {
    "topImage": redux,
    "experience": "2 Years",
    "year": "2022"
  },
  {
    "topImage": jQuery,
    "experience": "3 Years",
    "year": "2021"
  },
];
  return (
    <>
      <Heading />
      <div style={{display: "flex"}}>
      {arrayofObjects.map((data, index) =>(
        <Cube key = {index} topImage={data.topImage} experience={data.experience} year = {data.year}/>
      ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "40vw",
          height: "40vh",
          overflow: "hidden",
          position: "absolute",
          top: "50px",
          left: "1200px",
        }}
      >
        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <SparrowModel position={[5, 0, 0]} />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
      <ThemeToggle />
    </>
  );
}

export default App;
