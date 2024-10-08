/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.4.1 public/models/f19noanime.glb 
*/

import React from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = React.useRef()
  const { nodes, materials, animations } = useGLTF('/f19noanime.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="finalsmall" position={[0.098, 1.24, 0.08]} rotation={[0, -0.742, 0]}>
          <group name="five" rotation={[-Math.PI, 1.562, -Math.PI]}>
            <mesh name="dot1" geometry={nodes.dot1.geometry} material={materials['Material.008']} position={[-0.922, 0.43, -0.044]} rotation={[0, -0.838, 0]} scale={0.045} />
            <mesh name="dot6" geometry={nodes.dot6.geometry} material={materials['Material.008']} position={[2.254, 0.282, 0.194]} rotation={[0, -0.838, 0]} scale={0.045} />
          </group>
          <group name="four" rotation={[0, Math.PI / 2, 0]}>
            <mesh name="dot2" geometry={nodes.dot2.geometry} material={materials['Material.008']} position={[-0.505, 0.602, -0.024]} rotation={[0, -0.829, 0]} scale={0.045} />
            <mesh name="dot7" geometry={nodes.dot7.geometry} material={materials['Material.008']} position={[1.822, 0.021, 0.147]} rotation={[0, -0.829, 0]} scale={0.045} />
          </group>
          <group name="onecir" rotation={[Math.PI, 1.562, 3.141]}>
            <mesh name="dot5" geometry={nodes.dot5.geometry} material={materials['Material.008']} position={[0.974, 1.076, 0.043]} rotation={[0, -0.838, 0]} scale={0.045} />
            <mesh name="dot9" geometry={nodes.dot9.geometry} material={materials['Material.008']} position={[0.356, -0.67, 0.074]} rotation={[0, -0.838, 0]} scale={0.045} />
          </group>
          <group name="seccir" rotation={[-Math.PI, 1.562, 3.141]}>
            <mesh name="dot10" geometry={nodes.dot10.geometry} material={materials['Material.008']} position={[0.874, -0.45, 0.104]} rotation={[0, -0.838, 0]} scale={0.045} />
            <mesh name="dot4" geometry={nodes.dot4.geometry} material={materials['Material.008']} position={[0.433, 0.934, 0.019]} rotation={[0, -0.838, 0]} scale={0.045} />
          </group>
          <group name="three" rotation={[0, Math.PI / 2, 0]}>
            <mesh name="dot3" geometry={nodes.dot3.geometry} material={materials['Material.008']} position={[-0.036, 0.773, -0.004]} rotation={[0, -0.829, 0]} scale={0.045} />
            <mesh name="dot8" geometry={nodes.dot8.geometry} material={materials['Material.008']} position={[1.371, -0.217, 0.121]} rotation={[0, -0.829, 0]} scale={0.045} />
          </group>
          <mesh name="center_ball" geometry={nodes.center_ball.geometry} material={materials['Material.001']} rotation={[0, 0.742, 0]} scale={0.243} />
        </group>
        <group name="circleanimef" position={[0.098, 1.24, 0.08]}>
          <mesh name="center_circle" geometry={nodes.center_circle.geometry} material={materials['Material.008']} position={[0.1, -0.007, 0.089]} rotation={[0, -0.62, -Math.PI / 2]} scale={0.255} />
        </group>
        <mesh name="spiral" geometry={nodes.spiral.geometry} material={materials['Material.008']} position={[0.082, 1.222, 0.093]} rotation={[-0.196, 0.567, -2.689]} scale={0.12} />
      </group>
    </group>
  )
}

useGLTF.preload('/f19noanime.glb')
