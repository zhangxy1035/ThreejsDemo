/**
 * Created by cancer on 2017-03-01.
 */
var scene = null;
var camera = null;
var renderer = null;

var cube = null;
var alpha = 0;

function init() {
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(400, 300);

    var container = document.getElementById('canvas');
    container.appendChild(renderer.domElement);
    renderer.shadowMapEnabled = true;

    scene = new THREE.Scene();

    camera = new THREE.OrthographicCamera(-5, 5, 3.75, -3.75, 0.1, 100);
    camera.position.set(5, 15, 25);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    scene.add(camera);

    var plane = new THREE.Mesh(new THREE.PlaneGeometry(8, 8, 16, 16),
        new THREE.MeshLambertMaterial({color: 0xcccccc}));
    plane.rotation.x = -Math.PI / 2;
    plane.position.y = -1;
    plane.receiveShadow = true;
    scene.add(plane);

    cube = new THREE.Mesh(new THREE.CubeGeometry(1, 1, 1),
        new THREE.MeshLambertMaterial({color: 0x00ff00}));
    cube.position.x = 2;
    cube.castShadow = true;
    scene.add(cube);

    var light = new THREE.SpotLight(0xffff00, 1, 100, Math.PI / 6, 25);
    light.position.set(2, 5, 3);
    light.target = cube;
    light.castShadow = true;
    scene.add(light);

    // ambient light
    var ambient = new THREE.AmbientLight(0x666666);
    scene.add(ambient);

    requestAnimationFrame(draw);
}

function draw() {
    alpha += 0.01;
    if (alpha > Math.PI * 2) {
        alpha -= Math.PI * 2;
    }

    cube.position.set(2 * Math.cos(alpha), 0, 2 * Math.sin(alpha));

    renderer.render(scene, camera);

    requestAnimationFrame(draw);
}