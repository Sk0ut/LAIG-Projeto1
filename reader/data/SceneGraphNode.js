function SceneGraphNode() {
    this.id = "";
    this.material = "";
    this.texture = "";
    this.transformationMatrix = mat4.create();
    mat4.identity(this.transformationMatrix);
    this.descendants = [];
}

SceneGraphNode.prototype = Object.create(Object.prototype);
SceneGraphNode.prototype.constructor = SceneGraphNode;