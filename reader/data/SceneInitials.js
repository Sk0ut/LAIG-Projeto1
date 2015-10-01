function SceneInitials() {
    this.frustum = {near: 0,
                    far: 0};

    this.translation = vec3.create();

    this.rotation = vec3.create();
                    
    this.scaling = vec3.create();
    
    this.referenceLength = 0;
};

SceneInitials.prototype = Object.create(Object.prototype);
SceneInitials.prototype.constructor = SceneInitials;