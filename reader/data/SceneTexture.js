function SceneTexture(filePath, id) {
    this.filePath = filePath;
    this.id = id;
    this.amplifFactor = {s: 1,
                         t: 1};
};

SceneTexture.prototype = Object.create(Object.prototype);
SceneTexture.prototype.constructor = SceneTexture;

SceneTexture.prototype.setAmpliFactor = function(s, t) {
    this.amplifFactor.s = s;
    this.amplifFactor.t = t;
};