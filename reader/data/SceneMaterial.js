function SceneMaterial() {
    this.shininess = 1;
    this.diffuse = {r: 0, g: 0, b: 0, a: 0};
    this.ambient = {r: 0, g: 0, b: 0, a: 0};
    this.specular = {r: 0, g: 0, b: 0, a: 0};
    this.emission = {r: 0, g: 0, b: 0, a: 0};
}

SceneMaterial.prototype = Object.create(Object.prototype);
SceneMaterial.prototype.constructor = SceneMaterial;