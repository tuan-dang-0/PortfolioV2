import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useRef } from 'react';
import { Mesh } from 'three';

const Model = () => {
  const { scene } = useGLTF('/logo.glb');
  const mesh = useRef<Mesh>();

  useFrame(() => {
    if (mesh.current) mesh.current.rotation.y += 0.01; // Adjust the rotation speed here
  });

  return (
    <mesh ref={mesh as React.MutableRefObject<Mesh>}>
      <hemisphereLight intensity={0.3} /> {/* Reduced intensity */}
      <ambientLight intensity={0.5} /> {/* Reduced intensity */}
      <directionalLight
        intensity={1}
        position={[-5, 3, 0]} // Adjust position for the left window
        castShadow
      />
      <primitive object={scene} scale={2.8} position={[0, -2.8, 0]} />
    </mesh>
  );
};

const Logo = () => {
  return (
    <Canvas
      frameloop="always"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
    >
      <Suspense>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />

        <Model />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default Logo;
