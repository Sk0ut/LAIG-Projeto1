function SceneGraphLeafCylinder(id, height, bottomRadius, topRadius, sections, parts) {
    SceneGraphLeaf.call(this, id, "cylinder");
    this.height = height;
    this.bottomRadius = bottomRadius;
    this.topRadius = topRadius;
    this.sections = sections;
    this.parts = parts;
}

SceneGraphLeafCylinder.prototype = Object.create(SceneGraphLeaf.prototype);
SceneGraphLeafCylinder.prototype.constructor = SceneGraphLeafCylinder;