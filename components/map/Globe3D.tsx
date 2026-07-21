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
  
  const mountedRef = useRef(false);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationIdRef = useRef<number | null>(null);
  const globeRef = useRef<THREE.Mesh | null>(null);
  const markerGroupRef = useRef<THREE.Group | null>(null);
  const markerMeshesRef = useRef<THREE.Mesh[]>([]);

  const cleanupGlobe = () => {
    if (animationIdRef.current) {
      cancelAnimationFrame(animationIdRef.current);
      animationIdRef.current = null;
    }
    if (rendererRef.current) {
      rendererRef.current.dispose();
      rendererRef.current = null;
    }
    if (containerRef.current) {
      const canvas = containerRef.current.querySelector('canvas');
      if (canvas) {
        try {
          containerRef.current.removeChild(canvas);
        } catch (_) {}
      }
    }
    controlsRef.current = null;
    globeRef.current = null;
    markerGroupRef.current = null;
    markerMeshesRef.current = [];
    mountedRef.current = false;
  };

  useEffect(() => {
    if (mountedRef.current) {
      return cleanupGlobe;
    }
    mountedRef.current = true;

    if (!containerRef.current) return;

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
    globeRef.current = globe;
    scene.add(globe);

    // ===== ATMOSPHERE =====
    const glowGeometry = new THREE.SphereGeometry(radius * 1.02, 64, 64);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0x8B5CF6,
      transparent: true,
      opacity: 0.08,
      side: THREE.BackSide,
    });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    scene.add(glow);

    // ===== COUNTRY MARKERS (Subtle - for hover only) =====
    const markerGroup = new THREE.Group();
    markerGroupRef.current = markerGroup;
    const markerMeshes: THREE.Mesh[] = [];

    countries.forEach((country) => {
      const phi = (90 - country.coordinates.lat) * Math.PI / 180;
      const theta = country.coordinates.lng * Math.PI / 180;
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.cos(phi);
      const z = radius * Math.sin(phi) * Math.sin(theta);
      
      const isSelected = selectedCountryId === country.id;
      const isHovered = hoveredCountry === country.id;
      
      // Small subtle marker
      const markerSize = isSelected ? 0.12 : (isHovered ? 0.10 : 0.04);
      const markerGeo = new THREE.SphereGeometry(markerSize, 8, 8);
      const markerMat = new THREE.MeshBasicMaterial({ 
        color: isSelected ? 0x22D3EE : (isHovered ? 0x8B5CF6 : 0x6B21A8),
        transparent: true,
        opacity: isSelected ? 1 : (isHovered ? 1 : 0.15),
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
        const ringGeo = new THREE.TorusGeometry(isSelected ? 0.22 : 0.16, 0.02, 8, 16);
        const ringMat = new THREE.MeshBasicMaterial({
          color: isSelected ? 0x22D3EE : 0x8B5CF6,
          transparent: true,
          opacity: isSelected ? 0.8 : 0.4,
        });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.position.set(x, y, z);
        ring.lookAt(0, 0, 0);
        ring.userData = { isRing: true };
        markerGroup.add(ring);
      }
    });

    scene.add(markerGroup);
    markerMeshesRef.current = markerMeshes;

    // ===== STARS =====
    const starsGeometry = new THREE.BufferGeometry();
    const starsCount = 2000;
    const starsPositions = new Float32Array(starsCount * 3);
    
    for (let i = 0; i < starsCount; i++) {
      const r = 50 + Math.random() * 150;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      starsPositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      starsPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      starsPositions[i * 3 + 2] = r * Math.cos(phi);
    }
    
    starsGeometry.setAttribute('position', new THREE.BufferAttribute(starsPositions, 3));
    const starsMaterial = new THREE.PointsMaterial({
      size: 0.1,
      transparent: true,
      opacity: 0.8,
      color: 0xffffff,
      sizeAttenuation: true,
    });
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // ===== LIGHTS =====
    const ambientLight = new THREE.AmbientLight(0x404060, 0.6);
    scene.add(ambientLight);
    const light = new THREE.DirectionalLight(0xffffff, 1.5);
    light.position.set(5, 5, 5);
    scene.add(light);
    const backLight = new THREE.DirectionalLight(0x8B5CF6, 0.5);
    backLight.position.set(-5, -5, -5);
    scene.add(backLight);

    // ===== CAMERA =====
    camera.position.set(0, 0.5, 7.5);

    // ===== CONTROLS =====
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

    // ===== HOVER =====
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

    // ===== CLICK — ON GLOBE SURFACE (NO MARKER NEEDED) =====
    const onPointerUp = (event: PointerEvent) => {
      if (isDragging) return;
      
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      
      raycaster.setFromCamera(mouse, camera);
      
      // ===== FIX: Check intersection with globe surface =====
      const intersects = raycaster.intersectObject(globe);
      
      if (intersects.length > 0) {
        const point = intersects[0].point;
        
        // Convert point to lat/lng
        const lat = Math.asin(point.y / radius) * 180 / Math.PI;
        const lng = Math.atan2(point.z, point.x) * 180 / Math.PI;
        
        // Find nearest country
        let nearestCountry = null;
        let minDistance = Infinity;
        
        countries.forEach(country => {
          const d = Math.sqrt(
            Math.pow(lat - country.coordinates.lat, 2) + 
            Math.pow(lng - country.coordinates.lng, 2)
          );
          if (d < minDistance) {
            minDistance = d;
            nearestCountry = country;
          }
        });
        
        if (nearestCountry && minDistance < 15) {
          onCountryClick(nearestCountry.id);
          controls.autoRotate = false;
          setTimeout(() => { controls.autoRotate = true; }, 5000);
        }
      }
    };

    const onPointerDown = (event: PointerEvent) => {
      mouseDownX = event.clientX;
      mouseDownY = event.clientY;
      isDragging = false;
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
      
      if (globeRef.current) globeRef.current.rotation.y += 0.0008;
      glow.rotation.y += 0.0008;
      if (markerGroupRef.current) {
        markerGroupRef.current.rotation.y += 0.0008;
        markerGroupRef.current.children.forEach((child) => {
          if (child.userData?.isRing) {
            child.rotation.z += 0.02;
          }
        });
      }
      
      controls.update();
      renderer.render(scene, camera);
    };
    
    animate();

    return () => {
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