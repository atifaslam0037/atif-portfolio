import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

export default function EarthCanvas() {
  return (
    <div style={{ width: "100%", height: "500px" }}>
      <Canvas
        shadows
        frameloop="demand"
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
        style={{ background: "transparent", width: "100%", height: "100%" }}
      >
        <ambientLight intensity={0.6} color={"#06b6d4"} />
        <directionalLight position={[5, 5, 5]} intensity={1.0} color={"#e5f3ff"} />
        <pointLight position={[-6, 2, -4]} intensity={0.8} color={"#2563eb"} />

        <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />

        <Suspense fallback={null}>
          <Earth />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}

const Earth = () => {
  const earth = useGLTF("/planet/scene.gltf");
  return <primitive object={earth.scene} scale={3} position={[0, 0, 0]} rotation={[0, 0, 0]} />;
};

// Preload the model
useGLTF.preload("/planet/scene.gltf");