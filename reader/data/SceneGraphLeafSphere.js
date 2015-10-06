function SceneGraphLeafSphere(id, radius, stacks, sections) {
    SceneGraphLeaf.call(this, id, "sphere");
    this.radius = radius;
    this.stacks = stacks;
    this.sections = sections;
}

SceneGraphLeafSphere.prototype = Object.create(SceneGraphLeaf.prototype);
SceneGraphLeafSphere.prototype.constructor = SceneGraphLeafSphere;