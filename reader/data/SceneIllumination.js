function SceneIllumination() {
    this.ambient = {r: 0, g: 0, b: 0, a: 0};
    this.doubleside = false;
    this.background = {r: 0, g: 0, b: 0, a: 0};
}

SceneIllumination.prototype = Object.create(Object.prototype);
SceneIllumination.prototype.constructor = SceneIllumination;