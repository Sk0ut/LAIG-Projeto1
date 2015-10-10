function SceneGraphNode(id) {
    this.id = id;
    this.material = "null";
    this.texture = "clear";
    this.transformationMatrix = mat4.create();
    mat4.identity(this.transformationMatrix);
    this.descendants = [];
}

SceneGraphNode.prototype = Object.create(Object.prototype);
SceneGraphNode.prototype.constructor = SceneGraphNode;

SceneGraphNode.prototype.setMaterial = function(material) {
    this.material = material;
}

SceneGraphNode.prototype.setTexture = function(texture) {
     this.texture = texture;
}

SceneGraphNode.prototype.addDescendant = function(descendant) {
    this.descendants.push(descendant);
}

SceneGraphNode.prototype.rotateX = function(rad) {
    mat4.rotateX(this.transformationMatrix, this.transformationMatrix, rad);
}
SceneGraphNode.prototype.rotateY = function(rad) {
    mat4.rotateY(this.transformationMatrix, this.transformationMatrix, rad);
}
SceneGraphNode.prototype.rotateZ = function(rad) {
    mat4.rotateZ(this.transformationMatrix, this.transformationMatrix, rad);
}

SceneGraphNode.prototype.scale = function(sx, sy, sz) {
    mat4.scale(this.transformationMatrix, this.transformationMatrix, vec3.fromValues(sx,sy,sz));
}

SceneGraphNode.prototype.translate = function(x, y, z) {
    mat4.translate(this.transformationMatrix, this.transformationMatrix, vec3.fromValues(x, y, z));
}
