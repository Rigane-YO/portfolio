import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import TrackPageView from "./util/TrackPageView";
import { Canvas } from "@react-three/fiber";
import StarsBackground from "./component/bacKground/StarsBackGround";
import Planet from './component/planet/Planet'
import { TextureLoader } from "three";
import "./App.css";

function App() {
  const earthTexture = new TextureLoader().load("/textures/earth.jpg");

  return (
    <Router>
      <TrackPageView />
      <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
        {/* Canvas en arrière-plan */}
        <Canvas
          camera={{ position: [0, 0, 3] }} // Position modifiée pour voir la scène
          style={{
            position: "absolute", top: 0, left: 0, zIndex: -1, // Canvas derrière tout
            width: "100%", height: "100%" // Assure-toi que le Canvas prend toute la surface
          }}
        >
          <StarsBackground />
          <Planet texture={earthTexture} position={[2, 0, 0]} size={0.5} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
        </Canvas>

        {/* Contenu des routes au premier plan */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
