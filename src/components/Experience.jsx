import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Solar } from "./solar";
export const Experience = () => {
  return (
    <>
      <ambientLight intensity={1} />
      {/* <OrbitControls enableZoom={false} /> */}

      <ScrollControls pages={5} damping={0.25}>
        <Solar />
      </ScrollControls>
    </>
  );
};
