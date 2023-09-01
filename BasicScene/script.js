const scene = new THREE.Scene();

/**
 * To create a visible object we create a MESH
 * A MESH is a combination of Geometry and Materials
 */
// Red Cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

// PROVIDED Camera
const ar = {
    width: 400,
    height: 400,
};

/**
 * @function PerspectiveCamera
 * @param FOV - Focal View in degrees
 * @param AspectRatio - Width / Height
 * @param Renderer - Where to visualize the Scene from a Camera POV
 */
const camera = new THREE.PerspectiveCamera(75, ar.width / ar.height);
camera.position.z = 2;

scene.add(camera);

const canvas = document.getElementById("webgl");
const renderer = new THREE.WebGLRenderer({
    canvas,
});
renderer.setSize(ar.width, ar.height);
renderer.render(scene, camera);

function animate() {
    requestAnimationFrame(animate);
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();
