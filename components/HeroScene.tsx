"use client"

import { useRef, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls, Float, MeshDistortMaterial, GradientTexture, Environment, Sphere } from "@react-three/drei"
import { useTheme } from "next-themes"
import * as THREE from "three"

function ParticleField({ count = 1000 }) {
  const { theme } = useTheme()
  const isDarkMode = theme === "dark"

  const mesh = useRef<THREE.InstancedMesh>(null)
  const particles = useRef<{ position: THREE.Vector3; velocity: THREE.Vector3 }[]>([])

  useEffect(() => {
    if (!mesh.current) return

    particles.current = Array.from({ length: count }, () => ({
      position: new THREE.Vector3((Math.random() - 0.5) * 25, (Math.random() - 0.5) * 25, (Math.random() - 0.5) * 25),
      velocity: new THREE.Vector3(
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
      ),
    }))

    const dummy = new THREE.Object3D()

    particles.current.forEach((particle, i) => {
      dummy.position.copy(particle.position)
      dummy.updateMatrix()
      mesh.current?.setMatrixAt(i, dummy.matrix)
    })

    mesh.current.instanceMatrix.needsUpdate = true
  }, [count])

  useFrame(() => {
    if (!mesh.current) return

    const dummy = new THREE.Object3D()

    particles.current.forEach((particle, i) => {
      particle.position.add(particle.velocity)

      // Boundaries check
      if (Math.abs(particle.position.x) > 12) particle.velocity.x *= -1
      if (Math.abs(particle.position.y) > 12) particle.velocity.y *= -1
      if (Math.abs(particle.position.z) > 12) particle.velocity.z *= -1

      dummy.position.copy(particle.position)
      dummy.updateMatrix()
      mesh.current?.setMatrixAt(i, dummy.matrix)
    })

    mesh.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.03, 8, 8]} />
      <meshBasicMaterial color={isDarkMode ? "#60a5fa" : "#3b82f6"} />
    </instancedMesh>
  )
}

function FloatingLogo() {
  const { theme } = useTheme()
  const isDarkMode = theme === "dark"
  const mesh = useRef<THREE.Mesh>(null)

  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.y = clock.getElapsedTime() * 0.2
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={mesh} position={[0, 0, 0]}>
        <torusKnotGeometry args={[1, 0.3, 100, 16]} />
        <MeshDistortMaterial
          color={isDarkMode ? "#60a5fa" : "#3b82f6"}
          distort={0.4}
          speed={2}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </Float>
  )
}

function HeroContent() {
  const { camera } = useThree()

  useEffect(() => {
    camera.position.set(0, 0, 10)
  }, [camera])

  return (
    <>
      <ParticleField count={800} />
      <FloatingLogo />
      <Sphere args={[8, 64, 64]} position={[0, 0, -15]}>
        <MeshDistortMaterial distort={0.2} speed={2} transparent opacity={0.1}>
          <GradientTexture stops={[0, 0.5, 1]} colors={["#4f46e5", "#818cf8", "#60a5fa"]} />
        </MeshDistortMaterial>
      </Sphere>
      <Environment preset="city" />
    </>
  )
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 45 }}>
        <HeroContent />
        <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.5} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  )
}

