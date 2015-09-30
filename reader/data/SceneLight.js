function SceneLight(scene, an, id) {
    CGFlight.call(this, scene, an);
    this.id = id;
}

SceneLight.prototype = Object.create(CGFlight.prototype);
SceneLight.prototype.constructor = SceneLight;