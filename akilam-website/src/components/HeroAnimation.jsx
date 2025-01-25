// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";

const RotatingSphere = () => {
  const sphereRef = useRef();

  // Animation logic for rotation
  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    sphereRef.current.rotation.x = elapsed * 0.5;
    sphereRef.current.rotation.y = elapsed * 0.5;
  });

  return (
    <mesh ref={sphereRef} position={[0, 0, 0]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#f1c40f" wireframe />
    </mesh>
  );
};

const HeroAnimation = () => {
  return (
    <Canvas
      style={{
        width: "100%",
        height: "70vh",
        position: "absolute",
        top: 0,
        zIndex: -1,
      }}
      camera={{ position: [0, 0, 5] }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      {/* 3D Objects */}
      <RotatingSphere />

      {/* Starfield */}
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
      />

      {/* Camera Controls */}
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default HeroAnimation;
