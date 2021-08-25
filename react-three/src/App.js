import { Canvas } from "@react-three/fiber";
import Cube from "./ThreeModels/Cube";
import "./App.css";
import TorusKnot from "./ThreeModels/TorusKnot";

function App() {
  return (
    <div className="canvas-container">
      <Canvas id="cube-1">
        <Cube ></Cube>
      </Canvas>
      <Canvas id="knot">
        <TorusKnot ></TorusKnot>
      </Canvas>
      <Canvas id="cube-2">
        <Cube ></Cube>
      </Canvas>
    </div>
  );
}

export default App;
