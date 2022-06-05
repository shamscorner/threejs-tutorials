import './style.css'

import {
  Scene, 
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh
} from 'three';

const scene = new Scene();
const camera = new PerspectiveCamera(
  75, // field of view (FOV) in degrees
  window.innerWidth / window.innerHeight, // aspect ratio
  0.1, // nearest point from the camera
  1000 // farthest point from the camera
);
const renderer = new WebGLRenderer();

renderer.setSize( 
  window.innerWidth, window.innerHeight 
);
document.querySelector('#app').appendChild( 
  renderer.domElement 
);

// draw cube
const geometry = new BoxGeometry(
  1, 
  1, 
  1
);
const material = new MeshBasicMaterial({
  color: 0xfed766 // (hex color)
});
const cube = new Mesh(
  geometry, // takes a geometry
  material // applies a material
);
// will add on coordinates (0, 0, 0)
scene.add(cube);

// move the camera out a bit
camera.position.z = 5;

// animation loop
function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  
  renderer.render(scene, camera);
}
animate();