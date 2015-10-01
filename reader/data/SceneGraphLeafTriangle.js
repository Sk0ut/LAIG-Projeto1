function SceneGraphLeafTriangle() {
    SceneGraphLeaf.call(this);
    this.v1 = vec3.create();
    this.v2 = vec3.create();
    this.v3 = vec3.create();
}

SceneGraphLeafTriangle.prototype = Object.create(SceneGraphLeaf.prototype);
SceneGraphLeafTriangle.prototype.constructor = SceneGraphLeafTriangle;