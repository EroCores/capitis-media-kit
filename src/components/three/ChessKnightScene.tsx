"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export const ChessKnightScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // WebGL desteğini kontrol et
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) {
        setWebglSupported(false);
        return;
      }
    } catch {
      setWebglSupported(false);
      return;
    }

    // Prefers reduced motion kontrolü
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // 1. Scene, Camera, Renderer
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;

    container.appendChild(renderer.domElement);

    // 2. Geometrik Stratejik Satranç Taşı Objesi
    const chessGroup = new THREE.Group();

    // Taban (Base)
    const baseGeo = new THREE.CylinderGeometry(1.6, 1.8, 0.4, 32);
    const goldMaterial = new THREE.MeshStandardMaterial({
      color: 0xdeb86a,
      metalness: 0.85,
      roughness: 0.25,
      wireframe: false,
    });
    const baseMesh = new THREE.Mesh(baseGeo, goldMaterial);
    baseMesh.position.y = -1.8;
    chessGroup.add(baseMesh);

    // Gövde (Body rings)
    const midGeo = new THREE.CylinderGeometry(1.2, 1.5, 0.5, 32);
    const midMesh = new THREE.Mesh(midGeo, goldMaterial);
    midMesh.position.y = -1.4;
    chessGroup.add(midMesh);

    // At Başı Geometrik Heykeli (Faceted Geometric Knight)
    const knightShape = new THREE.IcosahedronGeometry(1.3, 1);
    const knightMat = new THREE.MeshStandardMaterial({
      color: 0xebd298,
      metalness: 0.9,
      roughness: 0.2,
      flatShading: true,
    });
    const knightMesh = new THREE.Mesh(knightShape, knightMat);
    knightMesh.position.set(0, 0.1, 0);
    knightMesh.scale.set(0.9, 1.4, 1.1);
    chessGroup.add(knightMesh);

    // Tepe Tacı (Crown / Apex)
    const crownGeo = new THREE.OctahedronGeometry(0.55);
    const crownMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 0.95,
      roughness: 0.1,
    });
    const crownMesh = new THREE.Mesh(crownGeo, crownMat);
    crownMesh.position.set(0, 1.5, 0);
    chessGroup.add(crownMesh);

    scene.add(chessGroup);

    // 3. Ortam Parçacıkları (Ambient Gold Dust / Particles)
    const particleCount = 70;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 10;
      positions[i + 1] = (Math.random() - 0.5) * 8;
      positions[i + 2] = (Math.random() - 0.5) * 6;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xe5b869,
      size: 0.05,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 4. Işıklandırma (Dramatic Studio Lighting)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffe6a3, 2.5);
    keyLight.position.set(5, 5, 5);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x7393ff, 1.8);
    rimLight.position.set(-5, -2, -4);
    scene.add(rimLight);

    // 5. Mouse Parallax Etkileşimi
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

      targetRotationY = x * 0.45;
      targetRotationX = y * 0.3;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // 6. Animasyon Döngüsü
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!prefersReducedMotion) {
        chessGroup.rotation.y += 0.007;
        particles.rotation.y += 0.001;

        // Smooth damping parallax
        chessGroup.rotation.x += (targetRotationX - chessGroup.rotation.x) * 0.05;
        chessGroup.position.y = Math.sin(Date.now() * 0.0015) * 0.12;
      }

      renderer.render(scene, camera);
    };

    animate();

    // 7. Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);

      renderer.dispose();
      baseGeo.dispose();
      midGeo.dispose();
      knightShape.dispose();
      crownGeo.dispose();
      goldMaterial.dispose();
      knightMat.dispose();
      crownMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  if (!webglSupported) {
    return (
      <div className="w-full h-full flex items-center justify-center p-8">
        <div className="w-48 h-48 rounded-full border border-amber-400/30 bg-gradient-to-br from-amber-400/10 via-neutral-900 to-black flex items-center justify-center shadow-2xl">
          <span className="text-6xl select-none" aria-label="Stratejik Satranç Taşı">♟</span>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={mountRef}
      className="w-full h-full min-h-[350px] sm:min-h-[420px] lg:min-h-[500px] flex items-center justify-center cursor-grab active:cursor-grabbing"
      aria-hidden="true"
    />
  );
};
