function SceneGraphLeafRectangle() {
    SceneGraphLeaf.call(this);
    this.v1 = vec3.create();
    this.v2 = vec3.create();
}

SceneGraphLeaf.prototype = Object.create(SceneGraphLeaf.prototype);
SceneGraphLeaf.prototype.constructor = SceneGraphLeaf;