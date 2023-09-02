import "./style.css";
import { setupScene } from "./basicScene.js";

document.querySelector("#app").innerHTML = `
    <canvas id="webgl"></canvas>
`;

let { scene, camera, renderer, mesh, controls } = setupScene(document.getElementById("webgl"));
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
animate();
