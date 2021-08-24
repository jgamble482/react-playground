import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";
import "./App.css";

function App() {
  return (
    <div id="canvas-container">
      <Canvas id="canvas">
        <Cube />
      </Canvas>
    </div>
  );
}

export default App;
