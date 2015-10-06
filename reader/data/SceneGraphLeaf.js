function SceneGraphLeaf(id, type) {
    this.id = id;
    this.type = type;
}

SceneGraphLeaf.prototype = Object.create(Object.prototype);
SceneGraphLeaf.prototype.constructor = SceneGraphLeaf;