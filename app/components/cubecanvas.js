"use client";
import { useEffect, useRef } from "react";
import { PerspectiveCamera, Scene, WebGLRenderer, BoxGeometry, EdgesGeometry, LineBasicMaterial, LineSegments, MeshBasicMaterial, SphereGeometry, Mesh, Group } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default function ThreeCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;

    // Scene, Camera, Renderer
    const scene = new Scene();
    const camera = new PerspectiveCamera(50, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    camera.position.set(3, 3, 3);

    const renderer = new WebGLRenderer({ alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Cube Group (to rotate everything together)
    const cubeGroup = new Group();
    scene.add(cubeGroup);

    // Cube Wireframe
    const cubeSize = 2;
    const geometry = new BoxGeometry(cubeSize, cubeSize, cubeSize);
    const edges = new EdgesGeometry(geometry);
    const lineMaterial = new LineBasicMaterial({ color: "#00C0FF" });
    const cubeWireframe = new LineSegments(edges, lineMaterial);
    cubeGroup.add(cubeWireframe);

    // Cube Vertices
    const vertices = [
      [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
      [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]
    ];
    const sphereMaterial = new MeshBasicMaterial({ color: "#00C0FF" });
    const sphereRadius = 0.1;

    vertices.forEach(v => {
      const sphereGeometry = new SphereGeometry(sphereRadius, 16, 16);
      const sphere = new Mesh(sphereGeometry, sphereMaterial);
      sphere.position.set(v[0] * cubeSize / 2, v[1] * cubeSize / 2, v[2] * cubeSize / 2);
      cubeGroup.add(sphere);
    });

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; 
    controls.dampingFactor = 0.05; 
    controls.rotateSpeed = 1.0; 

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      cubeGroup.rotation.y += 0.01;
      cubeGroup.rotation.x += 0.005;
      controls.update();
      renderer.render(scene, camera);
    };

    animate();


    const handleResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      mount.removeChild(renderer.domElement);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div ref={mountRef} style={{ width: "100%", height: "100vh" }} />
  );
}
