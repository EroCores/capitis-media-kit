"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export const ChessKnightScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [webglSupported, setWebglSupported] = useState(true);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

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

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const width = container.clientWidth || 380;
    const height = container.clientHeight || 380;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;

    container.appendChild(renderer.domElement);

    // Kinetik 2040 Stratejik Çekirdek Grubu
    const masterGroup = new THREE.Group();

    // 1. Dış Jiroskopik Orbital Halka (Outer Ring)
    const ring1Geo = new THREE.TorusGeometry(2.35, 0.022, 16, 100);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0xd4a843,
      metalness: 0.95,
      roughness: 0.15,
      emissive: 0x4a3610,
      emissiveIntensity: 0.3,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    masterGroup.add(ring1);

    // 2. İç Orbital Halka (Inner Ring - Dik Açı)
    const ring2Geo = new THREE.TorusGeometry(1.95, 0.018, 16, 80);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0xa78bfa,
      metalness: 0.9,
      roughness: 0.2,
      emissive: 0x2e1065,
      emissiveIntensity: 0.4,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = Math.PI / 2.5;
    masterGroup.add(ring2);

    // 3. Fasetli Kuantum Çekirdek (Icosahedron Core)
    const coreGeo = new THREE.IcosahedronGeometry(1.2, 1);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0xf5df9e,
      metalness: 0.95,
      roughness: 0.15,
      flatShading: true,
      wireframe: false,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    masterGroup.add(coreMesh);

    // 4. Kafes Katmanı (Wireframe Lattice)
    const wireGeo = new THREE.IcosahedronGeometry(1.4, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xd4a843,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    masterGroup.add(wireMesh);

    // 5. Merkez Foton Noktası (Apex Crystal)
    const apexGeo = new THREE.OctahedronGeometry(0.4);
    const apexMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 1,
      roughness: 0.05,
      emissive: 0xffe6a3,
      emissiveIntensity: 0.8,
    });
    const apexMesh = new THREE.Mesh(apexGeo, apexMat);
    apexMesh.position.y = 1.6;
    masterGroup.add(apexMesh);

    scene.add(masterGroup);

    // 6. 2040 Yıldız Tozu & Telemetri Parçacıkları (Nebula Field)
    const particleCount = 120;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 11;
      positions[i + 1] = (Math.random() - 0.5) * 9;
      positions[i + 2] = (Math.random() - 0.5) * 7;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xf0d68a,
      size: 0.045,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 7. Işık Sistemi
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.85);
    scene.add(ambientLight);

    const goldKeyLight = new THREE.DirectionalLight(0xffd77a, 3.2);
    goldKeyLight.position.set(6, 6, 6);
    scene.add(goldKeyLight);

    const violetRimLight = new THREE.DirectionalLight(0x8b5cf6, 2.5);
    violetRimLight.position.set(-6, -3, -5);
    scene.add(violetRimLight);

    const centerGlow = new THREE.PointLight(0xd4a843, 2, 8);
    centerGlow.position.set(0, 0, 0);
    scene.add(centerGlow);

    // 8. İnteraktif Fare Takibi
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetX = x * 0.6;
      targetY = y * 0.45;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // 9. Animasyon
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Yumuşak fare sönümlemesi
        mouseX += (targetX - mouseX) * 0.06;
        mouseY += (targetY - mouseY) * 0.06;

        masterGroup.rotation.y = elapsedTime * 0.4 + mouseX;
        masterGroup.rotation.x = mouseY * 0.8;

        // Jiroskopik zıt orbital dönüşler
        ring1.rotation.z = elapsedTime * 0.6;
        ring1.rotation.x = Math.sin(elapsedTime * 0.3) * 0.35;

        ring2.rotation.y = -elapsedTime * 0.8;
        ring2.rotation.z = Math.cos(elapsedTime * 0.4) * 0.3;

        wireMesh.rotation.y = -elapsedTime * 0.2;
        apexMesh.rotation.y = elapsedTime * 1.2;

        // Mikro nefes alma efekti
        const pulse = 1 + Math.sin(elapsedTime * 1.5) * 0.035;
        coreMesh.scale.set(pulse, pulse, pulse);

        particles.rotation.y = elapsedTime * 0.04;
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);

      renderer.dispose();
      ring1Geo.dispose();
      ring2Geo.dispose();
      coreGeo.dispose();
      wireGeo.dispose();
      apexGeo.dispose();
      particleGeo.dispose();
      ring1Mat.dispose();
      ring2Mat.dispose();
      coreMat.dispose();
      wireMat.dispose();
      apexMat.dispose();
      particleMat.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  if (!webglSupported) {
    return (
      <div className="w-full h-full flex items-center justify-center p-6">
        <div className="w-40 h-40 rounded-full border border-amber-400/30 bg-gradient-to-br from-amber-400/10 via-neutral-900 to-black flex items-center justify-center shadow-2xl">
          <span className="text-5xl select-none" aria-label="Kinetik Çekirdek">◈</span>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={mountRef}
      className="w-full h-full min-h-[300px] sm:min-h-[360px] lg:min-h-[400px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
      aria-hidden="true"
    />
  );
};
