import * as THREE from "three";
import { TrackballControls } from "three/addons/controls/TrackballControls.js";

export function setupScene(element) {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);
    // Red Cube
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const mesh = new THREE.Mesh(geometry, material);

    scene.add(mesh);
    const ratio = {
        w: 600,
        h: 600,
    };
    const camera = new THREE.PerspectiveCamera(75, ratio.w / ratio.h, 0.15, 1200);
    camera.position.set(1, 1, 1);
    camera.position.x = 6;

    const renderer = new THREE.WebGLRenderer({ canvas: element, antialias: true });
    const controls = new TrackballControls(camera, element);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(ratio.w, ratio.h);
    // renderer.render(scene, camera);
    return { scene, camera, mesh, renderer, controls };
}
