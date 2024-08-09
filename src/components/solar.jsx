import React from "react";
import { useEffect } from "react";
import { useGLTF, useAnimations, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { CircleGeometry, MeshBasicMaterial, Mesh } from "three";
import { Line } from "@react-three/drei";

import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { useLayoutEffect } from "react";
import gsap from "gsap";
export function Solar(props) {
  const { nodes, materials, animations } = useGLTF("./models/f22noanime.glb");
  const { actions } = useAnimations(animations);
  const ref = useRef();
  const tl = useRef();
  const { viewport } = useThree();
  const resRatio = viewport.width / 2;
  const isMobile = window.innerWidth < 768;
  const CircleOutline = ({ radius = 1, segments = 64, color = "black" }) => {
    const points = [];
    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * Math.PI * 2;
      points.push([Math.cos(angle) * radius, Math.sin(angle) * radius, 0]);
    }

    return <Line points={points} color={color} lineWidth={2.5} />;
  };
  const spira = useRef();
  const dot1 = useRef();
  const dot2 = useRef();
  const dot3 = useRef();
  const dot4 = useRef();
  const dot5 = useRef();
  const dot9 = useRef();
  const dot10 = useRef();
  const dot8 = useRef();
  const dot7 = useRef();
  const dot6 = useRef();
  const onecir = useRef();
  const seccir = useRef();
  const three = useRef();
  const four = useRef();
  const five = useRef();
  const outonecir = useRef();
  const centercir = useRef();
  const centerball = useRef();
  const spreaone = useRef();

  const finalsma = useRef();
  const sprea = useRef();
  const dotAnimationDuration = 0.4;
  const overalls = useRef();
  const scroll = useScroll();

  useFrame(() => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline();

    tl.current.to(
      spira.current.rotation,
      {
        duration: 0.3,
        x: 1.66,
        y: -0.2,
      },
      -0.5
    );

    tl.current.to(
      spira.current.position,
      {
        duration: 0.3,
        x: isMobile ? 0.15 : 0.44,
        y: isMobile ? -0.09 : -0.19,
      },
      -0.5
    );

    tl.current.to(
      dot5.current.position,
      {
        duration: 0.3,
        x: -0.7,
        y: 0.02,
      },
      -0.5
    );
    // command
    tl.current.to(
      dot9.current.position,
      {
        duration: 0.3,
        x: 0.7,
        y: 0.01,
      },
      -0.5
    );

    tl.current.to(
      dot4.current.position,
      {
        duration: 0.3,
        x: -1.2,
        y: 0.02,
      },
      -0.5
    );

    tl.current.to(
      dot10.current.position,
      {
        duration: 0.3,
        x: 1.2,
        y: 0.01,
      },
      -0.5
    );

    tl.current.to(
      dot3.current.position,
      {
        duration: 0.3,
        x: -1.7,
        y: 0.02,
      },
      -0.5
    );

    tl.current.to(
      dot8.current.position,
      {
        duration: 0.3,
        x: 1.7,
        y: 0.01,
      },
      -0.5
    );
    tl.current.to(
      dot2.current.position,
      {
        duration: 0.3,
        x: -2.2,
        y: 0.02,
      },
      -0.5
    );

    tl.current.to(
      dot7.current.position,
      {
        duration: 0.3,
        x: 2.2,
        y: 0.01,
      },
      -0.5
    );

    tl.current.to(
      dot1.current.position,
      {
        duration: 0.3,
        x: -2.7,
        y: 0.02,
      },
      -0.5
    );

    tl.current.to(
      dot6.current.position,
      {
        duration: 0.3,
        x: 2.7,
        y: 0.01,
      },
      -0.5
    );

    tl.current.to(
      spira.current.scale,
      {
        duration: 0.4,
        x: 0,
        y: 0,
        z: 0,
      },
      0
    );

    tl.current.to(
      spira.current.position,
      {
        duration: 0.4,
        x: 0,
        y: 0,
        z: 0,
      },
      0
    );

    tl.current.to(
      onecir.current.rotation,
      {
        duration: 0.4,
        z: -3.1,
      },
      0.5
    );

    tl.current.to(
      seccir.current.rotation,
      {
        duration: 0.4,
        z: -3.1,
      },
      0.52
    );

    tl.current.to(
      three.current.rotation,
      {
        duration: 0.4,
        z: -3.1,
      },
      0.54
    );

    tl.current.to(
      four.current.rotation,
      {
        duration: 0.4,
        z: -3.1,
      },
      0.56
    );

    tl.current.to(
      five.current.rotation,
      {
        duration: 0.4,
        z: -3.1,
      },
      0.58
    );

    tl.current.to(
      overalls.current.position,
      {
        duration: 0.4,

        x: 0.08,
        y: 1.25,
      },
      0.7
    );

    const radius = 0.22; // 50% of the original radius

    tl.current.to(
      dot1.current.position,
      {
        duration: 0.4,
        x: radius * Math.cos((2 * Math.PI * 4) / 10),
        y: radius * Math.sin((2 * Math.PI * 4) / 10),
        z: 0.3,
      },
      0.7
    );

    tl.current.to(
      dot2.current.position,
      {
        duration: 0.4,
        x: radius * Math.cos((2 * Math.PI * 3) / 10),
        y: radius * Math.sin((2 * Math.PI * 3) / 10),
        z: 0.3,
      },
      0.7
    );

    tl.current.to(
      dot3.current.position,
      {
        duration: 0.4,
        x: radius * Math.cos((2 * Math.PI * 2) / 10),
        y: radius * Math.sin((2 * Math.PI * 2) / 10),
        z: 0.3,
      },
      0.7
    );

    tl.current.to(
      dot4.current.position,
      {
        duration: 0.4,
        x: radius * Math.cos((2 * Math.PI * 1) / 10),
        y: radius * Math.sin((2 * Math.PI * 1) / 10),
        z: 0.3,
      },
      0.7
    );

    tl.current.to(
      dot5.current.position,
      {
        duration: 0.4,
        x: radius,
        y: 0.0,
        z: 0.3,
      },
      0.7
    );

    tl.current.to(
      dot6.current.position,
      {
        duration: 0.4,
        x: radius * Math.cos(Math.PI),
        y: radius * Math.sin(Math.PI),
        z: 0.3,
      },
      0.7
    );

    tl.current.to(
      dot7.current.position,
      {
        duration: 0.4,
        x: radius * Math.cos((2 * Math.PI * 6) / 10),
        y: radius * Math.sin((2 * Math.PI * 6) / 10),
        z: 0.3,
      },
      0.7
    );

    tl.current.to(
      dot8.current.position,
      {
        duration: 0.4,
        x: radius * Math.cos((2 * Math.PI * 7) / 10),
        y: radius * Math.sin((2 * Math.PI * 7) / 10),
        z: 0.3,
      },
      0.7
    );

    tl.current.to(
      dot9.current.position,
      {
        duration: 0.4,
        x: radius * Math.cos((2 * Math.PI * 8) / 10),
        y: radius * Math.sin((2 * Math.PI * 8) / 10),
        z: 0.3,
      },
      0.7
    );

    tl.current.to(
      dot10.current.position,
      {
        duration: 0.4,
        x: radius * Math.cos((2 * Math.PI * 9) / 10),
        y: radius * Math.sin((2 * Math.PI * 9) / 10),
        z: 0.3,
      },
      0.7
    );

    tl.current.to(
      overalls.current.rotation,
      {
        duration: 0.6,

        z: -6.3,
      },
      1
    );

    tl.current.to(
      sprea.current.scale,
      {
        duration: 0.4,
        x: 0.25,
        y: 0.25,
        z: 0.25,
      },
      0.9
    );

    tl.current.to(
      overalls.current.scale,
      {
        duration: 0,
        x: 0,
        y: 0,
        z: 0,
      },
      1.4
    );
    tl.current.to(
      sprea.current.scale,
      {
        duration: 3,
        delay: 0.5,
        x: 8,
        y: 8,
        z: 8,
      },
      2.5
    );

    tl.current.to(
      centerball.current.scale,
      {
        duration: 0.2,
        // delay: 1,
        x: 0,
        y: 0,
        z: 0,
      },
      2.5
    );

    tl.current.to(
      spreaone.current.scale,
      {
        duration: 0.4,
        x: 0.25,
        y: 0.25,
        z: 0.25,
      },
      2.1
    );

    tl.current.to(
      spreaone.current.scale,
      {
        duration: 3,
        delay: 0.5,
        x: 8,
        y: 8,
        z: 8,
      },
      2.8
    );
  }, []);

  // const restscalingfact = window.innerWidth / 1300;
  // console.log(restscalingfact);
  // resRatio
  // isMobile
  console.log(viewport.width / 12);
  return (
    <group {...props} dispose={null}>
      <group
        scale={[
          isMobile ? 0.5 / resRatio : 1,
          isMobile ? 0.5 / resRatio : 1,
          isMobile ? 0.5 / resRatio : 1,
        ]}
        rotation={[isMobile ? 0.4 : 0.1, 5.5, 0]}
        position={[0, isMobile ? 1 : -1, 1]}
      >
        <group>
          <group position={[0.098, 1.24, 0.08]}>
            <group ref={centercir}>
              <mesh
                geometry={nodes.center_circle.geometry}
                material={materials["Material.008"]}
                position={[0.1, -0.007, 0.089]}
                rotation={[0, -0.62, -Math.PI / 2]}
                scale={0}
              />
            </group>
          </group>
          <group
            ref={overalls}
            position={[0.098, 1.24, 0.08]}
            rotation={[0, 0.838, -0.001]}
          >
            <group>
              <group ref={five}>
                <mesh
                  ref={dot1}
                  geometry={nodes.dot1.geometry}
                  material={materials["Material.008"]}
                  position={[-0.922, 0.43, -0.044]}
                  rotation={[0, -0.838, 0]}
                  scale={0.032}
                />
                <mesh
                  ref={dot6}
                  geometry={nodes.dot6.geometry}
                  material={materials["Material.008"]}
                  position={[2.256, 0.275, 0.141]}
                  rotation={[0, -0.838, 0]}
                  scale={0.032}
                />
              </group>
            </group>

            <group>
              <group ref={four}>
                <mesh
                  ref={dot2}
                  geometry={nodes.dot2.geometry}
                  material={materials["Material.008"]}
                  position={[-0.505, 0.602, -0.024]}
                  rotation={[0, -0.829, 0]}
                  scale={0.032}
                />
                <mesh
                  ref={dot7}
                  geometry={nodes.dot7.geometry}
                  material={materials["Material.008"]}
                  position={[1.831, 0.014, 0.094]}
                  rotation={[0, -0.829, 0]}
                  scale={0.032}
                />
              </group>
            </group>

            <group ref={outonecir}>
              <group ref={onecir}>
                <mesh
                  ref={dot5}
                  geometry={nodes.dot5.geometry}
                  material={materials["Material.008"]}
                  position={[0.974, 1.076, 0.043]}
                  rotation={[0, -0.838, 0]}
                  scale={0.032}
                />
                <mesh
                  ref={dot9}
                  geometry={nodes.dot9.geometry}
                  material={materials["Material.008"]}
                  position={[0.358, -0.684, 0.021]}
                  rotation={[0, -0.838, 0]}
                  scale={0.032}
                />
              </group>
            </group>

            <group>
              <group ref={seccir}>
                <mesh
                  ref={dot10}
                  geometry={nodes.dot10.geometry}
                  material={materials["Material.008"]}
                  position={[0.876, -0.464, 0.05]}
                  rotation={[0, -0.838, 0]}
                  scale={0.032}
                />
                <mesh
                  ref={dot4}
                  geometry={nodes.dot4.geometry}
                  material={materials["Material.008"]}
                  position={[0.433, 0.934, 0.019]}
                  rotation={[0, -0.838, 0]}
                  scale={0.032}
                />
              </group>
            </group>

            <group>
              <group ref={three}>
                <mesh
                  ref={dot3}
                  geometry={nodes.dot3.geometry}
                  material={materials["Material.008"]}
                  position={[-0.036, 0.773, -0.004]}
                  rotation={[0, -0.829, 0]}
                  scale={0.032}
                />
                <mesh
                  ref={dot8}
                  geometry={nodes.dot8.geometry}
                  material={materials["Material.008"]}
                  position={[1.373, -0.231, 0.068]}
                  rotation={[0, -0.829, 0]}
                  scale={0.032}
                />
              </group>
            </group>
          </group>
          <mesh
            ref={centerball}
            geometry={nodes.center_ball.geometry}
            material={materials["Material.001"]}
            position={[0.098, 1.24, 0.08]}
            scale={0.24}
          />
          <group
            position={[0.082, 1.222, 0.093]}
            rotation={[-0.196, 0.567, -2.689]}
          >
            <group ref={spira}>
              <mesh
                geometry={nodes.spiral.geometry}
                material={materials["Material.008"]}
                scale={0.12}
              />
            </group>
          </group>
          <group
            ref={sprea}
            scale={0}
            position={[0.1, 1.24, 0.083]}
            rotation={[0, 0.8, -2.689]}
          >
            <CircleOutline color="white" />
          </group>
          <group
            ref={spreaone}
            scale={0}
            position={[0.1, 1.24, 0.083]}
            rotation={[0, 0.8, -2.689]}
          >
            <CircleOutline color="white" />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./models/f22noanime.glb");
