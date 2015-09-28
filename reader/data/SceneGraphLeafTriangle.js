function SceneGraphLeafTriangle() {
    SceneGraphLeaf.call(this);
    this.v1 = {x: 0, y: 0, z: 0};
    this.v2 = {x: 0, y: 0, z: 0};
    this.v3 = {x: 0, y: 0, z: 0};
}

SceneGraphLeafTriangle.prototype = Object.create(SceneGraphLeaf.prototype);
SceneGraphLeafTriangle.prototype.constructor = SceneGraphLeafTriangle;