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
  const markerRef = useRef<THREE.Mesh | null>(null);

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

    const globeGroup = new THREE.Group();
    globeGroupRef.current = globeGroup;
    scene.add(globeGroup);

    const radius = 2.5;

    // ===== 1. REAL EARTH TEXTURE (Loads from reliable CDN) =====
    const textureLoader = new THREE.TextureLoader();
    const earthMapUrl = 'https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg';
    
    textureLoader.load(
      earthMapUrl,
      (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace;
        const geometry = new THREE.SphereGeometry(radius, 64, 64);
        const material = new THREE.MeshPhongMaterial({
          map: texture,
          bumpScale: 0.05,
          shininess: 10,
        });
        const globeMesh = new THREE.Mesh(geometry, material);
        globeGroup.add(globeMesh);
        setIsLoading(false); // Hide loading once texture is ready
      },
      undefined,
      (error) => {
        console.error("Texture failed to load", error);
        // Fallback if texture fails
        const geometry = new THREE.SphereGeometry(radius, 64, 64);
        const material = new THREE.MeshPhongMaterial({ color: 0x1e3a8a });
        const globeMesh = new THREE.Mesh(geometry, material);
        globeGroup.add(globeMesh);
        setIsLoading(false);
      }
    );

    // ===== 2. CLOUDS OVERLAY =====
    const cloudMapUrl = 'https://unpkg.com/three-globe/example/img/earth-clouds.png';
    textureLoader.load(cloudMapUrl, (texture) => {
      const cloudGeo = new THREE.SphereGeometry(radius * 1.01, 64, 64);
      const cloudMat = new THREE.MeshPhongMaterial({
        map: texture,
        transparent: true,
        opacity: 0.4,
        blending: THREE.AdditiveBlending,
      });
      const clouds = new THREE.Mesh(cloudGeo, cloudMat);
      globeGroup.add(clouds);
      
      // Animate clouds separately
      const animateClouds = () => {
        clouds.rotation.y += 0.0002;
        requestAnimationFrame(animateClouds);
      };
      animateClouds();
    });

    // ===== 3. ATMOSPHERE GLOW =====
    const glowGeometry = new THREE.SphereGeometry(radius * 1.15, 64, 64);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0x3b82f6, // Blue glow
      transparent: true,
      opacity: 0.15,
      side: THREE.BackSide,
    });
    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    globeGroup.add(glow);

    // ===== 4. STARS =====
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
    const starsMaterial = new THREE.PointsMaterial({ size: 0.15, transparent: true, opacity: 0.8, color: 0xffffff });
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // ===== 5. LIGHTS =====
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);
    const dirLight = new THREE.DirectionalLight(0xffffff, 2);
    dirLight.position.set(5, 3, 5);
    scene.add(dirLight);

    camera.position.set(0, 0, 7);

    // ===== 6. MARKER (Glowing Ring) =====
    const markerGeo = new THREE.RingGeometry(0.05, 0.08, 32);
    const markerMat = new THREE.MeshBasicMaterial({ color: 0xef4444, side: THREE.DoubleSide, transparent: true, opacity: 0.8 });
    const marker = new THREE.Mesh(markerGeo, markerMat);
    marker.visible = false;
    globeGroup.add(marker);
    markerRef.current = marker;

    // ===== 7. CONTROLS =====
    const controls = new OrbitControls(camera, renderer.domElement);
    controlsRef.current = controls;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;
    controls.enableZoom = true;
    controls.minDistance = 3.5;
    controls.maxDistance = 10;

    // ===== 8. RAYCASTER =====
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
      
      // We only intersect with the main globe mesh (which is inside globeGroup)
      const intersects = raycaster.intersectObjects(globeGroup.children.filter(c => c.geometry?.type === 'SphereGeometry' && c !== glow));
      
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
        
        if (nearestCountry && minDistance < 25) {
          setHoveredCountry(nearestCountry.id);
          renderer.domElement.style.cursor = 'pointer';
          
          // Position Marker at nearest country
          const phi = (90 - nearestCountry.coordinates.lat) * (Math.PI / 180);
          const theta = (nearestCountry.coordinates.lng + 180) * (Math.PI / 180);
          marker.position.x = -radius * Math.sin(phi) * Math.cos(theta);
          marker.position.y = radius * Math.cos(phi);
          marker.position.z = radius * Math.sin(phi) * Math.sin(theta);
          marker.lookAt(0, 0, 0);
          
          // Show marker if selected, or hovered (we'll use selected here for UX)
          if (selectedCountryId === nearestCountry.id) {
            marker.visible = true;
          }
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
      const intersects = raycaster.intersectObjects(globeGroup.children.filter(c => c.geometry?.type === 'SphereGeometry' && c !== glow));
      
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
        
        if (nearestCountry && minDistance < 25) {
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

    // ===== 9. RESIZE =====
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // ===== 10. ANIMATE =====
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      
      if (globeGroupRef.current) {
        globeGroupRef.current.rotation.y += 0.0005;
      }
      
      // Pulse marker
      if (markerRef.current && markerRef.current.visible) {
        const scale = 1 + Math.sin(Date.now() * 0.005) * 0.2;
        markerRef.current.scale.set(scale, scale, scale);
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
  }, [onCountryClick, selectedCountryId]);

  // Update marker when selectedCountryId changes from outside
  useEffect(() => {
    if (!markerRef.current || !globeGroupRef.current) return;
    const country = countries.find(c => c.id === selectedCountryId);
    if (country) {
      const radius = 2.5;
      const phi = (90 - country.coordinates.lat) * (Math.PI / 180);
      const theta = (country.coordinates.lng + 180) * (Math.PI / 180);
      markerRef.current.position.x = -radius * Math.sin(phi) * Math.cos(theta);
      markerRef.current.position.y = radius * Math.cos(phi);
      markerRef.current.position.z = radius * Math.sin(phi) * Math.sin(theta);
      markerRef.current.lookAt(0, 0, 0);
      markerRef.current.visible = true;
    }
  }, [selectedCountryId]);

  const hoveredCountryData = countries.find(c => c.id === hoveredCountry);

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
            <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">Loading Earth...</span>
          </div>
        </div>
      )}
      
      <div ref={containerRef} className="w-full h-full cursor-grab" />
      
      {hoveredCountryData && !isLoading && (
        <div className="absolute top-6 left-1/2 -translate-x-1/2 px-6 py-2.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 pointer-events-none z-20 shadow-xl">
          <span className="text-sm text-white font-bold tracking-wide flex items-center gap-3">
            <span className="text-xl">{hoveredCountryData.flag}</span>
            {hoveredCountryData.name}
          </span>
        </div>
      )}
    </div>
  );
};