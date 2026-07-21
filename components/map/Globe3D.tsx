"use client";

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
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
  const markerMeshesRef = useRef<THREE.Mesh[]>([]);
  
  // ===== ADD THIS: Prevent double mount =====
  const mountedRef = useRef(false);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationIdRef = useRef<number | null>(null);

  // ===== CLEANUP FUNCTION =====
  const cleanupGlobe = () => {
    // Cancel animation frame
    if (animationIdRef.current) {
      cancelAnimationFrame(animationIdRef.current);
      animationIdRef.current = null;
    }

    // Dispose renderer
    if (rendererRef.current) {
      rendererRef.current.dispose();
      rendererRef.current = null;
    }

    // Remove canvas from DOM
    if (containerRef.current) {
      const canvas = containerRef.current.querySelector('canvas');
      if (canvas) {
        try {
          containerRef.current.removeChild(canvas);
        } catch (_) {}
      }
    }

    controlsRef.current = null;
    markerMeshesRef.current = [];
    mountedRef.current = false;
  };

  useEffect(() => {
    // ===== PREVENT DOUBLE MOUNT =====
    if (mountedRef.current) {
      return cleanupGlobe;
    }
    mountedRef.current = true;

    if (!containerRef.current) return;

    // ===== SCENE SETUP =====
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: "high-performance",
    });
    
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // ===== GLOBE =====
    const radius = 2.5;
    const geometry = new THREE.SphereGeometry(radius, 64, 64);
    
    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load('/images/earth-texture.jpg', () => {
      if (mountedRef.current) setIsLoading(false);
    });
    
    const material = new THREE.MeshPhongMaterial({
      map: earthTexture,
      transparent: true,
      opacity: 0.95,
      shininess: 25,
      emissive: new THREE.Color(0x0a0a2e),
      emissiveIntensity: 0.15,
    });
    
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    // ===== ATMOSPHERE GLOW =====
    const glowGeometry = new THREE.SphereGeometry(radius * 1.025, 64, 64);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0x8B5CF6,
      transparent: true,
      opacity: 0.08,
      side: THREE.BackSide,
    });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    scene.add(glow);

    // ===== COUNTRY MARKERS =====
    const markerGroup = new THREE.Group();
    const markerMeshes: THREE.Mesh[] = [];

    countries.forEach((country) => {
      // ===== EXACT COORDINATE CONVERSION (FIXED) =====
      const phi = (90 - country.coordinates.lat) * Math.PI / 180;
      const theta = country.coordinates.lng * Math.PI / 180;
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.cos(phi);
      const z = radius * Math.sin(phi) * Math.sin(theta);
      
      const isSelected = selectedCountryId === country.id;
      const isHovered = hoveredCountry === country.id;
      
      const markerSize = isSelected ? 0.15 : (isHovered ? 0.12 : 0.08);
      const markerGeo = new THREE.SphereGeometry(markerSize, 16, 16);
      const markerMat = new THREE.MeshBasicMaterial({ 
        color: isSelected ? 0x22D3EE : (isHovered ? 0x8B5CF6 : 0x6B21A8),
        transparent: true,
        opacity: isSelected ? 1 : (isHovered ? 1 : 0.6),
      });
      const marker = new THREE.Mesh(markerGeo, markerMat);
      marker.position.set(x, y, z);
      marker.userData = { 
        countryId: country.id,
        countryName: country.name,
        flag: country.flag,
      };
      markerGroup.add(marker);
      markerMeshes.push(marker);
      
      if (isSelected || isHovered) {
        const ringGeo = new THREE.TorusGeometry(isSelected ? 0.25 : 0.18, 0.02, 12, 24);
        const ringMat = new THREE.MeshBasicMaterial({
          color: isSelected ? 0x22D3EE : 0x8B5CF6,
          transparent: true,
          opacity: isSelected ? 0.9 : 0.5,
        });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.position.set(x, y, z);
        ring.lookAt(0, 0, 0);
        ring.userData = { countryId: country.id, isRing: true };
        markerGroup.add(ring);
      }
      
      if (isSelected) {
        const pulseGeo = new THREE.TorusGeometry(0.35, 0.015, 12, 24);
        const pulseMat = new THREE.MeshBasicMaterial({
          color: 0x22D3EE,
          transparent: true,
          opacity: 0.4,
        });
        const pulse = new THREE.Mesh(pulseGeo, pulseMat);
        pulse.position.set(x, y, z);
        pulse.lookAt(0, 0, 0);
        pulse.userData = { countryId: country.id, isPulse: true };
        markerGroup.add(pulse);
      }
    });

    scene.add(markerGroup);
    markerMeshesRef.current = markerMeshes;

    // ===== STARS =====
    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = 4000;
    const starsPositions = new Float32Array(starsCount * 3);
    const starsColors = new Float32Array(starsCount * 3);
    
    for (let i = 0; i < starsCount; i++) {
      const radius2 = 50 + Math.random() * 150;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      starsPositions[i * 3] = radius2 * Math.sin(phi) * Math.cos(theta);
      starsPositions[i * 3 + 1] = radius2 * Math.sin(phi) * Math.sin(theta);
      starsPositions[i * 3 + 2] = radius2 * Math.cos(phi);
      
      const color = Math.random() > 0.7 ? 0.8 : 0.3;
      starsColors[i * 3] = color + Math.random() * 0.2;
      starsColors[i * 3 + 1] = color + Math.random() * 0.2;
      starsColors[i * 3 + 2] = 0.8 + Math.random() * 0.2;
    }
    
    starsGeometry.setAttribute('position', new THREE.BufferAttribute(starsPositions, 3));
    starsGeometry.setAttribute('color', new THREE.BufferAttribute(starsColors, 3));
    const starsMaterial = new THREE.PointsMaterial({
      size: 0.12,
      transparent: true,
      opacity: 0.9,
      vertexColors: true,
      sizeAttenuation: true,
    });
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // ===== LIGHTS =====
    const ambientLight = new THREE.AmbientLight(0x404060, 0.6);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);
    
    const backLight = new THREE.DirectionalLight(0x8B5CF6, 0.5);
    backLight.position.set(-5, -5, -5);
    scene.add(backLight);

    // ===== CAMERA =====
    camera.position.set(0, 0.5, 10);

    // ===== ORBIT CONTROLS =====
    const controls = new OrbitControls(camera, renderer.domElement);
    controlsRef.current = controls;
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.6;
    controls.enableZoom = true;
    controls.zoomSpeed = 0.8;
    controls.enablePan = false;
    controls.minDistance = 4;
    controls.maxDistance = 14;
    controls.maxPolarAngle = Math.PI / 1.8;
    controls.target.set(0, 0, 0);

    // ===== RAYCASTER =====
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    let isDragging = false;
    let mouseDownX = 0;
    let mouseDownY = 0;

    // ===== POINTER EVENTS =====
    const onPointerDown = (event: PointerEvent) => {
      mouseDownX = event.clientX;
      mouseDownY = event.clientY;
      isDragging = false;
    };

    const onPointerMove = (event: PointerEvent) => {
      const dx = event.clientX - mouseDownX;
      const dy = event.clientY - mouseDownY;
      if (Math.sqrt(dx*dx + dy*dy) > 5) {
        isDragging = true;
      }
      
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(markerMeshes);
      
      if (intersects.length > 0) {
        const countryId = intersects[0].object.userData.countryId;
        if (countryId) {
          setHoveredCountry(countryId);
          renderer.domElement.style.cursor = 'pointer';
        }
      } else {
        setHoveredCountry(null);
        renderer.domElement.style.cursor = 'default';
      }
    };

    const onPointerUp = (event: PointerEvent) => {
      if (isDragging) return;
      
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(markerMeshes);
      
      if (intersects.length > 0) {
        const countryId = intersects[0].object.userData.countryId;
        if (countryId && onCountryClick) {
          onCountryClick(countryId);
          controls.autoRotate = false;
          setTimeout(() => { 
            if (controlsRef.current) {
              controlsRef.current.autoRotate = true;
            }
          }, 5000);
        }
      }
    };

    renderer.domElement.addEventListener('pointerdown', onPointerDown);
    renderer.domElement.addEventListener('pointermove', onPointerMove);
    renderer.domElement.addEventListener('pointerup', onPointerUp);

    // ===== RESIZE =====
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    
    window.addEventListener('resize', handleResize);

    // ===== ANIMATION =====
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      
      globe.rotation.y += 0.0008;
      glow.rotation.y += 0.0008;
      markerGroup.rotation.y += 0.0008;
      
      markerGroup.children.forEach((child) => {
        if (child.userData.isRing) {
          child.rotation.z += 0.02;
        }
        if (child.userData.isPulse) {
          const scale = 1 + 0.3 * Math.sin(Date.now() * 0.003);
          child.scale.set(scale, scale, scale);
          (child.material as THREE.MeshBasicMaterial).opacity = 0.3 + 0.3 * Math.sin(Date.now() * 0.003);
        }
      });
      
      controls.update();
      renderer.render(scene, camera);
    };
    
    animate();

    // ===== CLEANUP =====
    return () => {
      // Remove event listeners
      renderer.domElement.removeEventListener('pointerdown', onPointerDown);
      renderer.domElement.removeEventListener('pointermove', onPointerMove);
      renderer.domElement.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('resize', handleResize);
      
      cleanupGlobe();
    };
  }, [onCountryClick, selectedCountryId, hoveredCountry]);

  const hoveredCountryData = countries.find(c => c.id === hoveredCountry);

  return (
    <div className="relative w-full h-[600px] rounded-2xl overflow-hidden bg-gradient-to-b from-[#0a0a2e] to-[#0d0d2b] border border-white/10">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin" />
            <span className="text-gray-400 text-sm">Loading galaxy map...</span>
          </div>
        </div>
      )}
      
      <div ref={containerRef} className="w-full h-full" />
      
      {hoveredCountryData && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-lg bg-black/80 backdrop-blur-sm border border-white/10 pointer-events-none z-20 shadow-lg shadow-purple-500/10">
          <span className="text-sm text-white font-medium flex items-center gap-2">
            <span className="text-xl">{hoveredCountryData.flag}</span>
            {hoveredCountryData.name}
          </span>
        </div>
      )}
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 pointer-events-none">
        <span className="text-xs text-gray-400 flex items-center gap-2">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Hover on any country • Click to explore • Drag to rotate
        </span>
      </div>
    </div>
  );
};