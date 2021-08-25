import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";


const TorusKnot = () => {
  const knotRef = useRef();

  useFrame(({ clock }) => {
    knotRef.current.rotation.x = clock.getElapsedTime();
  });

  useEffect(() => {
    console.log(knotRef);
  }, []);
  return (
    <>
        <mesh ref={knotRef}>
          <ambientLight intensity={0.1} />
          <directionalLight color="green" position={[0, 0, 5]} />
          <torusKnotGeometry />
          <meshToonMaterial color="gray" />
        </mesh>
      
    </>
  );
};

export default TorusKnot;
