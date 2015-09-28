function SceneInitials() {
    this.frustum = {near: 0,
                    far: 0};

    this.translation = {x: 0,
                        y: 0,
                        z: 0};

    this.rotation = {x: 0,
                     y: 0,
                     z: 0};
                    
    this.scaling = {x: 0,
                    y: 0,
                    z: 0};
    
    this.referenceLength = 0;
};

SceneInitials.prototype = Object.create(Object.prototype);
SceneInitials.prototype.constructor = SceneInitials;