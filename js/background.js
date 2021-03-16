import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export function background() {
  const SCREEN_WIDTH = window.innerWidth,
    SCREEN_HEIGHT = window.innerHeight,
    r = 450;

  let camera, scene, renderer, controls;
  let threeJsScene = document.querySelector(".scene");

  init();
  animate();

  function init() {
    camera = new THREE.PerspectiveCamera(
      70,
      SCREEN_WIDTH / SCREEN_HEIGHT,
      1,
      3000
    );
    camera.position.z = 1000;

    // areas of actuation FOV goes to 500

    scene = new THREE.Scene();

    const parameters = [
      [0.25, 0xc94d24, 1],
      [0.5, 0x808080, 1],
      [0.75, 0xc94d24, 0.75],
      [1, 0x808080, 0.5],
      [1.25, 0xc94d24, 0.8],
      [3.0, 0xaaaaaa, 0.75],
      [3.5, 0xe3e3e3, 0.5],
      [4.5, 0xe3e3e3, 0.25],
      [5.5, 0xe3e3e3, 0.125]
    ];

    const geometry = createGeometry();

    for (let i = 0; i < parameters.length; ++i) {
      const p = parameters[i];

      const material = new THREE.LineBasicMaterial({
        color: p[1],
        opacity: p[2]
      });

      const line = new THREE.LineSegments(geometry, material);
      line.scale.x = line.scale.y = line.scale.z = p[0];
      line.userData.originalScale = p[0];
      line.rotation.y = Math.random() * Math.PI;
      line.updateMatrix();
      scene.add(line);
    }

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(threeJsScene.clientWidth, threeJsScene.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    renderer.setClearColor(0xffffff, 1);
    // renderer.setClearColor(0x081426, 1);

    threeJsScene.appendChild(renderer.domElement);

    controls = new OrbitControls(camera, renderer.domElement);
    controls.minDistance = 500;
    controls.maxDistance = 800;
    controls.enableRotate = true;
    controls.addEventListener("change", render);

    document.body.style.touchAction = "none";
    document.body.addEventListener("pointermove", onPointerMove);

    //

    window.addEventListener("resize", onWindowResize);

    // test geometry swapability

    //   setInterval(function() {
    //     const geometry = createGeometry();

    //     scene.traverse(function(object) {
    //       if (object.isLine) {
    //         object.geometry.dispose();
    //         object.geometry = geometry;
    //       }
    //     });
    //   }, 1000);
  }

  function createGeometry() {
    const geometry = new THREE.BufferGeometry();
    const vertices = [];

    const vertex = new THREE.Vector3();

    for (let i = 0; i < 1500; i++) {
      vertex.x = Math.random() * 2 - 1;
      vertex.y = Math.random() * 2 - 1;
      vertex.z = Math.random() * 2 - 1;
      vertex.normalize();
      vertex.multiplyScalar(r);

      vertices.push(vertex.x, vertex.y, vertex.z);

      vertex.multiplyScalar(Math.random() * 0.03 + 1);

      vertices.push(vertex.x, vertex.y, vertex.z);
    }

    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3)
    );

    return geometry;
  }

  function onWindowResize() {
    camera.aspect = threeJsScene.clientWidth / threeJsScene.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(threeJsScene.clientWidth, threeJsScene.clientHeight);
  }

  function onPointerMove(event) {
    if (event.isPrimary === false) return;

    //   mouseY = event.clientY - windowHalfY;
  }

  //

  function animate() {
    requestAnimationFrame(animate);

    scene.rotation.x += 0.0001;
    scene.rotation.y += 0.0001;
    scene.rotation.z += 0.0001;

    controls.update();

    render();
  }

  function render() {
    //   camera.lookAt(scene.position);

    renderer.render(scene, camera);

    const time = Date.now() * 0.00002;

    for (let i = 0; i < scene.children.length; i++) {
      const object = scene.children[i];

      if (object.isLine) {
        //   object.rotation.y = time * (i < 4 ? i + 1 : -(i + 1));

        if (i < 5) {
          const scale =
            object.userData.originalScale *
            (i / 5 + 1) *
            (1 + 0.5 * Math.sin(2 * time));

          object.scale.x = object.scale.y = object.scale.z = scale;
        }
      }
    }
  }
}

// backgroud();
