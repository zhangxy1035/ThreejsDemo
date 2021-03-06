/**
 * Created by cancer on 2017-02-28.
 */
function init() {
    var renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById('mainCanvas')
    });
    //renderer.setClearColor(0x666666);
    var scene = new THREE.Scene();

    // camera
    var camera = new THREE.OrthographicCamera(-10, 10, 7.5, -7.5, 0.1, 100);
    camera.position.set(0, 0, 25);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    scene.add(camera);

    // light
    var light = new THREE.PointLight(0xffffff, 1, 1000);
    light.position.set(10, 15, 20);
    scene.add(light);

    var texture = THREE.ImageUtils.loadTexture('../img/chess.png', {}, function() {
        renderer.render(scene, camera);
    });
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(4, 4);
    var material = new THREE.MeshLambertMaterial({
        map: texture
    });

    var plane = new THREE.Mesh(new THREE.PlaneGeometry(12, 12), material);
    scene.add(plane);

    renderer.render(scene, camera);
}