import "./home.css";
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const heroImg = document.querySelector(".hero-img");
    if (!heroImg) {
      console.error("Element .hero-img not found");
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 2.3);

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    heroImg.appendChild(renderer.domElement);

    const light = new THREE.AmbientLight(0xffffff, 10);
    scene.add(light);

    const loader = new GLTFLoader();
    let model;
    let mixer;
    loader.load(
      "/robot.glb",
      (gltf) => {
        model = gltf.scene;
        model.position.set(0, -1, 0);
        mixer = new THREE.AnimationMixer(model);
        const clip = gltf.animations[0];
        const action = mixer.clipAction(clip);
        action.play();
        scene.add(model);
      },
      undefined,
      undefined
    );

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.maxPolarAngle = Math.PI / 2;
    controls.minPolarAngle = Math.PI / 2;
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;

    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);
      let delta = clock.getDelta();
      if (mixer) mixer.update(delta);
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      heroImg.innerHTML = "";
    };
  }, []);

  return (
    <section className="hero">
      <div className="hero-con fade-in">
        <h1>Durai Pon Singh</h1>
        <ul className="h-ul">
          <li className="h-li">Student</li>
          <li className="h-li">Autodidact</li>
          <li className="h-li">Full Stack Developer</li>
        </ul>
        <p>
          &quot;The more that you read, the more things you will know. The more
          that you learn, the more places you&apos;ll go.&quot; — Dr. Seuss
        </p>
        <div className="h-cta">
          <a href="/projects">Projects</a>
          <a href="/contact">Contact Me</a>
        </div>
      </div>
      <div className="h-i">
        <div className="hero-img" id="hero-img"></div>
      </div>
    </section>
  );
};

export default Home;
