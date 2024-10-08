/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.4.1 public/models/f22noanime.glb 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/f22noanime.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0.098, 1.24, 0.08]}>
        <mesh geometry={nodes.center_circle.geometry} material={materials['Material.008']} position={[0.1, -0.007, 0.089]} rotation={[0, -0.62, -Math.PI / 2]} scale={0.255} />
      </group>
      <group position={[0.098, 1.24, 0.08]} rotation={[0, 0.838, -0.001]}>
        <mesh geometry={nodes.dot1.geometry} material={materials['Material.008']} position={[-0.922, 0.43, -0.044]} rotation={[0, -0.838, 0]} scale={0.035} />
        <mesh geometry={nodes.dot6.geometry} material={materials['Material.008']} position={[2.256, 0.275, 0.141]} rotation={[0, -0.838, 0]} scale={0.035} />
        <mesh geometry={nodes.dot2.geometry} material={materials['Material.008']} position={[-0.505, 0.602, -0.024]} rotation={[0, -0.829, 0]} scale={0.035} />
        <mesh geometry={nodes.dot7.geometry} material={materials['Material.008']} position={[1.831, 0.014, 0.094]} rotation={[0, -0.829, 0]} scale={0.035} />
        <mesh geometry={nodes.dot5.geometry} material={materials['Material.008']} position={[0.974, 1.076, 0.043]} rotation={[0, -0.838, 0]} scale={0.035} />
        <mesh geometry={nodes.dot9.geometry} material={materials['Material.008']} position={[0.358, -0.684, 0.021]} rotation={[0, -0.838, 0]} scale={0.035} />
        <mesh geometry={nodes.dot10.geometry} material={materials['Material.008']} position={[0.876, -0.464, 0.05]} rotation={[0, -0.838, 0]} scale={0.035} />
        <mesh geometry={nodes.dot4.geometry} material={materials['Material.008']} position={[0.433, 0.934, 0.019]} rotation={[0, -0.838, 0]} scale={0.035} />
        <mesh geometry={nodes.dot3.geometry} material={materials['Material.008']} position={[-0.036, 0.773, -0.004]} rotation={[0, -0.829, 0]} scale={0.035} />
        <mesh geometry={nodes.dot8.geometry} material={materials['Material.008']} position={[1.373, -0.231, 0.068]} rotation={[0, -0.829, 0]} scale={0.035} />
      </group>
      <mesh geometry={nodes.center_ball.geometry} material={materials['Material.001']} position={[0.098, 1.24, 0.08]} scale={0.243} />
      <mesh geometry={nodes.spiral.geometry} material={materials['Material.008']} position={[0.082, 1.222, 0.093]} rotation={[-0.196, 0.567, -2.689]} scale={0.12} />
    </group>
  )
}

useGLTF.preload('/f22noanime.glb')
