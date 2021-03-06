/**
 * Created by cancer on 2017-02-28.
 */
function init() {
    var renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById('mainCanvas')
    });
    renderer.setClearColor(0x000000);
    var scene = new THREE.Scene();

    // camera
    var camera = new THREE.OrthographicCamera(-5, 5, 3.75, -3.75, 0.1, 100);
    camera.position.set(25, 25, 25);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    scene.add(camera);

    // draw axes to help you understand the coordinate
    drawAxes(scene);

    var material = new THREE.MeshBasicMaterial({
        color: 0xffff00,
        wireframe: true
//        opacity: 0.75
    });

    // init an empty geometry
    var geometry = new THREE.Geometry();

    // set vertices
    // 4 vertices on top
    geometry.vertices.push(new THREE.Vector3(-1, 2, -1));
    geometry.vertices.push(new THREE.Vector3(1, 2, -1));
    geometry.vertices.push(new THREE.Vector3(1, 2, 1));
    geometry.vertices.push(new THREE.Vector3(-1, 2, 1));
    // 4 vertices on bottom
    geometry.vertices.push(new THREE.Vector3(-2, 0, -2));
    geometry.vertices.push(new THREE.Vector3(2, 0, -2));
    geometry.vertices.push(new THREE.Vector3(2, 0, 2));
    geometry.vertices.push(new THREE.Vector3(-2, 0, 2));

    // set faces
    // top face
    geometry.faces.push(new THREE.Face3(0, 1, 3));
    geometry.faces.push(new THREE.Face3(1, 2, 3));
    // bottom face
    geometry.faces.push(new THREE.Face3(4, 5, 6));
    geometry.faces.push(new THREE.Face3(5, 6, 7));
    // side faces
    geometry.faces.push(new THREE.Face3(1, 5, 6));
    geometry.faces.push(new THREE.Face3(6, 2, 1));
    geometry.faces.push(new THREE.Face3(2, 6, 7));
    geometry.faces.push(new THREE.Face3(7, 3, 2));
    geometry.faces.push(new THREE.Face3(3, 7, 0));
    geometry.faces.push(new THREE.Face3(7, 4, 0));
    geometry.faces.push(new THREE.Face3(0, 4, 5));
    geometry.faces.push(new THREE.Face3(0, 5, 1));

    var mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // render
    renderer.render(scene, camera);
}

function drawAxes(scene) {
    // x-axis
    var xGeo = new THREE.Geometry();
    xGeo.vertices.push(new THREE.Vector3(0, 0, 0));
    xGeo.vertices.push(new THREE.Vector3(1, 0, 0));
    var xMat = new THREE.LineBasicMaterial({
        color: 0xff0000
    });
    var xAxis = new THREE.Line(xGeo, xMat);
    scene.add(xAxis);

    // y-axis
    var yGeo = new THREE.Geometry();
    yGeo.vertices.push(new THREE.Vector3(0, 0, 0));
    yGeo.vertices.push(new THREE.Vector3(0, 1, 0));
    var yMat = new THREE.LineBasicMaterial({
        color: 0x00ff00
    });
    var yAxis = new THREE.Line(yGeo, yMat);
    scene.add(yAxis);

    // z-axis
    var zGeo = new THREE.Geometry();
    zGeo.vertices.push(new THREE.Vector3(0, 0, 0));
    zGeo.vertices.push(new THREE.Vector3(0, 0, 1));
    var zMat = new THREE.LineBasicMaterial({
        color: 0x00ccff
    });
    var zAxis = new THREE.Line(zGeo, zMat);
    scene.add(zAxis);
}