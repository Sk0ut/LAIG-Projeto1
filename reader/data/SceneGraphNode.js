function SceneGraphNode() {
    this.id = "";
    this.material = "";
    this.texture = "";
    this.transformations = [];
    this.descendants = [];
}

SceneGraphNode.prototype = Object.create(Object.prototype);
SceneGraphNode.prototype.constructor = SceneGraphNode;