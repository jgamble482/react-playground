import { useFrame } from "@react-three/fiber";
import { useRef } from "react";


const Cube = () => {
  const cubeRef = useRef();
  useFrame(({ clock }) => {
    cubeRef.current.rotation.y = clock.getElapsedTime();
  });
  return (
    <>
      
        <mesh ref={cubeRef}>
          <ambientLight intensity={0.1} />
          <directionalLight color="red" position={[0, 0, 5]} />
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial color="blue" />
        </mesh>
      
    </>
  );
};

export default Cube;
