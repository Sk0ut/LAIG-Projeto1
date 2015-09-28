function SceneGraphLeafRectangle() {
    SceneGraphLeaf.call(this);
    this.v1 = {x: 0, y: 0, z: 0};
    this.v2 = {x: 0, y: 0, z: 0};
}

SceneGraphLeaf.prototype = Object.create(SceneGraphLeaf.prototype);
SceneGraphLeaf.prototype.constructor = SceneGraphLeaf;