function SceneGraphLeafCylinder() {
    SceneGraphLeaf.call(this);
    this.height = 1;
    this.bottomRadius = 1;
    this.topRadius = 1;
    this.stacks = 1;
    this.sections = 1;
}

SceneGraphLeafCylinder.prototype = Object.create(SceneGraphLeaf.prototype);
SceneGraphLeafCylinder.prototype.constructor = SceneGraphLeafCylinder;