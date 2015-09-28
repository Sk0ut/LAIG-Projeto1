function MySceneData() {
    this.initials = new SceneInitials();
    this.illumination = new SceneIllumination();
    this.lights = [];
    this.textures = [];
    this.materials = [];
    this.leaves = [];
    this.elements = new SceneElements();
}

MySceneData.prototype = Object.create(Object.prototype);
MySceneData.prototype.constructor = MySceneData;