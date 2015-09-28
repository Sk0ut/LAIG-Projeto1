function SceneGraphLeafSphere() {
    SceneGraphLeaf.call(this);
    this.radius = 1;
    this.stacks = 1;
    this.sections = 1;
}

SceneGraphLeafSphere.prototype = Object.create(SceneGraphLeaf.prototype);
SceneGraphLeafSphere.prototype.constructor = SceneGraphLeafSphere;