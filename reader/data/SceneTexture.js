function SceneTexture() {
    this.filePath = "";
    this.amplifFactor = {s: 1,
                         t: 1};
}

SceneTexture.prototype = Object.create(Object.prototype);
SceneTexture.prototype.constructor = SceneTexture;