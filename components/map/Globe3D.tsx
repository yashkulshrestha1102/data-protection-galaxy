"use client";

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { countries } from '@/data/countries';

interface Globe3DProps {
  onCountryClick: (countryId: string) => void;
  selectedCountryId: string;
}

export const Globe3D = ({ onCountryClick, selectedCountryId }: Globe3DProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  
  const mountedRef = useRef(false);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationIdRef = useRef<number | null>(null);
  const globeGroupRef = useRef<THREE.Group | null>(null);

  const cleanupGlobe = () => {
    if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);
    if (rendererRef.current) rendererRef.current.dispose();
    if (containerRef.current) {
      const canvas = containerRef.current.querySelector('canvas');
      if (canvas) containerRef.current.removeChild(canvas);
    }
    controlsRef.current = null;
    globeGroupRef.current = null;
    mountedRef.current = false;
  };

  useEffect(() => {
    if (mountedRef.current) return cleanupGlobe;
    mountedRef.current = true;

    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create a group for all globe elements so they rotate together
    const globeGroup = new THREE.Group();
    globeGroupRef.current = globeGroup;
    scene.add(globeGroup);

    const radius = 2.5;

    // 1. Core Sphere (Dark + Glowing edges)
    const geometry = new THREE.SphereGeometry(radius, 64, 64);
    const material = new THREE.MeshPhongMaterial({
      color: 0x050510, // Very dark blue/black
      emissive: 0x4c1d95, // Deep purple glow
      emissiveIntensity: 0.2,
      transparent: true,
      opacity: 0.9,
      shininess: 100,
    });
    const globe = new THREE.Mesh(geometry, material);
    globeGroup.add(globe);

    // 2. Sharp Wireframe (Tech Look)
    const wireframeGeo = new THREE.SphereGeometry(radius * 1.002, 48, 48);
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: 0x8B5CF6, // Bright purple
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const wireframe = new THREE.Mesh(wireframeGeo, wireframeMat);
    globeGroup.add(wireframe);

    // 3. Sci-Fi Outer Rings
    const ringGeo = new THREE.RingGeometry(radius * 1.2, radius * 1.22, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x8B5CF6,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.3,
    });
    const ring1 = new THREE.Mesh(ringGeo, ringMat);
    ring1.rotation.x = Math.PI / 2;
    globeGroup.add(ring1);

    const ring2Geo = new THREE.RingGeometry(radius * 1.3, radius * 1.31, 64);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0xEC4899, // Pink
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.15,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = Math.PI / 3;
    ring2.rotation.y = Math.PI / 4;
    globeGroup.add(ring2);

    // 4. Atmosphere Glow
    const glowGeometry = new THREE.SphereGeometry(radius * 1.1, 64, 64);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0x8B5CF6,
      transparent: true,
      opacity: 0.05,
      side: THREE.BackSide,
    });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    globeGroup.add(glow);

    // 5. Stars Background
    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = 3000;
    const starsPositions = new Float32Array(starsCount * 3);
    for (let i = 0; i < starsCount; i++) {
      const r = 30 + Math.random() * 70;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      starsPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      starsPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      starsPositions[i * 3 + 2] = r * Math.cos(phi);
    }
    starsGeometry.setAttribute('position', new THREE.BufferAttribute(starsPositions, 3));
    const starsMaterial = new THREE.PointsMaterial({
      size: 0.15,
      transparent: true,
      opacity: 0.8,
      color: 0xffffff,
    });
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // 6. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);
    const dirLight = new THREE.DirectionalLight(0x8B5CF6, 2); // Purple light
    dirLight.position.set(5, 3, 5);
    scene.add(dirLight);
    const backLight = new THREE.DirectionalLight(0xEC4899, 1); // Pink backlight
    backLight.position.set(-5, -3, -5);
    scene.add(backLight);

    camera.position.set(0, 0, 8);

    // 7. Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controlsRef.current = controls;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.0; // Faster rotation
    controls.enableZoom = true;
    controls.minDistance = 4;
    controls.maxDistance = 12;
    controls.enablePan = false;

    // 8. Raycaster (Click/Hover)
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    let isDragging = false;
    let mouseDownX = 0;
    let mouseDownY = 0;

    const onPointerMove = (event: PointerEvent) => {
      const dx = event.clientX - mouseDownX;
      const dy = event.clientY - mouseDownY;
      if (Math.sqrt(dx*dx + dy*dy) > 5) isDragging = true;
      
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObject(globe);
      
      if (intersects.length > 0) {
        const point = intersects[0].point;
        const lat = Math.asin(point.y / radius) * 180 / Math.PI;
        const lng = Math.atan2(point.z, point.x) * 180 / Math.PI;
        
        let nearestCountry = null;
        let minDistance = Infinity;
        
        countries.forEach(country => {
          const d = Math.sqrt(Math.pow(lat - country.coordinates.lat, 2) + Math.pow(lng - country.coordinates.lng, 2));
          if (d < minDistance) { minDistance = d; nearestCountry = country; }
        });
        
        if (nearestCountry && minDistance < 20) {
          setHoveredCountry(nearestCountry.id);
          renderer.domElement.style.cursor = 'pointer';
        } else {
          setHoveredCountry(null);
          renderer.domElement.style.cursor = 'grab';
        }
      } else {
        setHoveredCountry(null);
        renderer.domElement.style.cursor = 'grab';
      }
    };

    const onPointerUp = (event: PointerEvent) => {
      if (isDragging) return;
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObject(globe);
      
      if (intersects.length > 0) {
        const point = intersects[0].point;
        const lat = Math.asin(point.y / radius) * 180 / Math.PI;
        const lng = Math.atan2(point.z, point.x) * 180 / Math.PI;
        
        let nearestCountry = null;
        let minDistance = Infinity;
        
        countries.forEach(country => {
          const d = Math.sqrt(Math.pow(lat - country.coordinates.lat, 2) + Math.pow(lng - country.coordinates.lng, 2));
          if (d < minDistance) { minDistance = d; nearestCountry = country; }
        });
        
        if (nearestCountry && minDistance < 20) {
          onCountryClick(nearestCountry.id);
          controls.autoRotate = false;
          setTimeout(() => { controls.autoRotate = true; }, 3000);
        }
      }
    };

    const onPointerDown = (event: PointerEvent) => {
      mouseDownX = event.clientX;
      mouseDownY = event.clientY;
      isDragging = false;
      renderer.domElement.style.cursor = 'grabbing';
    };

    renderer.domElement.addEventListener('pointerdown', onPointerDown);
    renderer.domElement.addEventListener('pointermove', onPointerMove);
    renderer.domElement.addEventListener('pointerup', onPointerUp);

    // 9. Resize
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // 10. Animation Loop with Scan Line
    const clock = new THREE.Clock();
    
    // Create a scan line mesh
    const scanGeo = new THREE.CylinderGeometry(radius * 1.005, radius * 1.005, 0.05, 64, 1, true);
    const scanMat = new THREE.MeshBasicMaterial({
      color: 0x00FFFF,
      transparent: true,
      opacity: 0.2,
      side: THREE.DoubleSide,
    });
    const scanLine = new THREE.Mesh(scanGeo, scanMat);
    scanLine.rotation.x = Math.PI / 2;
    globeGroup.add(scanLine);

    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      
      const elapsedTime = clock.getElapsedTime();
      
      // Rotate the whole group
      if (globeGroupRef.current) {
        globeGroupRef.current.rotation.y += 0.001; 
      }
      
      // Animate scan line moving up and down the globe
      scanLine.position.y = Math.sin(elapsedTime * 1.5) * radius;
      
      // Rotate rings independently
      ring1.rotation.z += 0.002;
      ring2.rotation.z -= 0.001;
      
      stars.rotation.y += 0.0001;
      
      controls.update();
      renderer.render(scene, camera);
    };
    
    setTimeout(() => setIsLoading(false), 500);
    animate();

    return () => {
      renderer.domElement.removeEventListener('pointerdown', onPointerDown);
      renderer.domElement.removeEventListener('pointermove', onPointerMove);
      renderer.domElement.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('resize', handleResize);
      cleanupGlobe();
    };
  }, [onCountryClick]);

  const hoveredCountryData = countries.find(c => c.id === hoveredCountry);

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#020205] border border-purple-500/20 shadow-[0_0_50px_rgba(139,92,246,0.1)]">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#020205] z-10">
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 border-4 border-purple-500/20 border-t-purple-500 rounded-full animate-spin" />
            <span className="text-purple-400 text-xs font-bold tracking-[0.2em] uppercase">Initializing Hologram</span>
          </div>
        </div>
      )}
      
      <div ref={containerRef} className="w-full h-full cursor-grab" />
      
      {hoveredCountryData && !isLoading && (
        <div className="absolute top-6 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full bg-black/80 backdrop-blur-md border border-purple-500/50 pointer-events-none z-20 shadow-[0_0_20px_rgba(139,92,246,0.4)] animate-in fade-in slide-in-from-top-4">
          <span className="text-sm text-white font-bold tracking-wide flex items-center gap-3">
            <span className="text-2xl drop-shadow-md">{hoveredCountryData.flag}</span>
            {hoveredCountryData.name}
          </span>
        </div>
      )}
      
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-5 py-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 pointer-events-none">
        <span className="text-[11px] font-medium text-gray-400 flex items-center gap-2 uppercase tracking-wider">
          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
          Drag to rotate • Click to explore
        </span>
      </div>
    </div>
  );
};