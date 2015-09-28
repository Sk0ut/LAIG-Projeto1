function SceneLight() {
    this.id = "";
    this.enable = false;
    this.position = {x: 0, y: 0, z: 0};
    this.ambient = {r: 0, g: 0, b: 0, a: 0};
    this.diffuse = {r: 0, g: 0, b: 0, a: 0};
    this.specular = {r: 0, g: 0, b: 0, a: 0};
}

SceneLight.prototype = Object.create(Object.prototype);
SceneLight.prototype.constructor = SceneLight;