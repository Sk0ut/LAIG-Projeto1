function SceneGraphLeafRectangle(id, v1x, v1y, v2x, v2y) {
    SceneGraphLeaf.call(this, id, "rectangle");
    this.v1 = vec3.fromValues(v1x, v1y, 0);
    this.v2 = vec3.fromValues(v2x, v2y, 0);
}

SceneGraphLeaf.prototype = Object.create(SceneGraphLeaf.prototype);
SceneGraphLeaf.prototype.constructor = SceneGraphLeaf;