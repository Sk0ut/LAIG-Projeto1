function SceneGraphLeafTriangle(id, v1x, v1y, v1z, v2x, v2y, v2z, v3x, v3y, v3z) {
    SceneGraphLeaf.call(this, id, "triangle");
    this.v1 = vec3.fromValues(v1x, v1y, v1z);
    this.v2 = vec3.fromValues(v2x, v2y, v2z);
    this.v3 = vec3.fromValues(v3x, v3y, v3z);
}

SceneGraphLeafTriangle.prototype = Object.create(SceneGraphLeaf.prototype);
SceneGraphLeafTriangle.prototype.constructor = SceneGraphLeafTriangle;