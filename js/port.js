/**
 * Created by cancer on 2017-03-01.
 */
var scene = null;
var camera = null;
var renderer = null;

var mesh = null;
var id = null;

function init() {
    renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById('mainCanvas')
    });
    renderer.setClearColor(0x000000);
    scene = new THREE.Scene();

    camera = new THREE.OrthographicCamera(-5, 5, 3.75, -3.75, 0.1, 100);
    camera.position.set(15, 25, 25);
    camera.lookAt(new THREE.Vector3(0, 2, 0));
    scene.add(camera);

    var loader = new THREE.OBJLoader();
    loader.load('../resource/port.obj', function(obj) {
        obj.traverse(function(child) {
            if (child instanceof THREE.Mesh) {
                //添加材质
//                child.material = new THREE.MeshLambertMaterial({
//                    color: 0xffff00,
//                    side: THREE.DoubleSide
//                });
                //双面渲染
//                child.material.side = THREE.DoubleSide;
            }
        });

        mesh = obj;
        scene.add(obj);
    });

    var light = new THREE.DirectionalLight(0xffffff);
    light.position.set(20, 10, 5);
    scene.add(light);

    id = setInterval(draw, 20);
}

function draw() {
    renderer.render(scene, camera);

    mesh.rotation.y += 0.01;
    if (mesh.rotation.y > Math.PI * 2) {
        mesh.rotation.y -= Math.PI * 2;
    }
}