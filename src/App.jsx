import React from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import SparrowModel from "./sparrow";
import "./App.css";
import Heading from "./headings";
import ThemeToggle from "./themetoggle";
import AboutMeCard from './AboutCard';
import Roadmap from './Roadmap';
import Portfolio from './Portfolio';
function App() {

  return (
    <>
      <Heading />
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
          left: "900px",
          zIndex: 1,
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
      <AboutMeCard />
      <Roadmap />
      <Portfolio />
    </>
  );
}

export default App;
