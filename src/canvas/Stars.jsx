import React, { Suspense, useState, useRef } from 'react';
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import styled from "styled-components";

const StyledCanvasWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  inset: 0;
`;

const Stars = () => {
  const ref = useRef();
  const [sphere] = useState(() => {
    const sphereData = random.inSphere(new Float32Array(5000), { radius: 1.2 });
    // Check if any NaN values are present
    console.log(sphereData);
    return sphereData;
  });

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.001; // Smooth rotation of the stars
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StyledStarCanvas = () => {
  return (
    <StyledCanvasWrapper>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </StyledCanvasWrapper>
  );
};

export default StyledStarCanvas;
