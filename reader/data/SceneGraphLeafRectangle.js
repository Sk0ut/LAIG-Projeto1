function SceneGraphLeafRectangle(id, v1x, v1y, v2x, v2y) {
    SceneGraphLeaf.call(this, id, "rectangle");
    this.v1x = v1x;
    this.v1y = v1y;
    this.v2x = v2x;
    this.v2y = v2y;
}

SceneGraphLeaf.prototype = Object.create(SceneGraphLeaf.prototype);
SceneGraphLeaf.prototype.constructor = SceneGraphLeaf;