function MyCylinder(scene, height, bRadius, tRadius, stacks, slices) {
 	CGFobject.call(this,scene);
	
	this.height = height;

	this.slices=slices;
	this.stacks=stacks;

	this.bRadius = bRadius;
	this.tRadius = tRadius;

 	this.initBuffers();
};

MyCylinder.prototype = Object.create(CGFobject.prototype);
MyCylinder.prototype.constructor = MyCylinder;

MyCylinder.prototype.initBuffers = function() {
    var angulo = 2*Math.PI/this.slices;
	var dRadius = (this.tRadius - this.bRadius) / this.stacks;
	var dHeight = this.height / this.stacks;

	this.vertices=[];
 	this.normals=[];
	this.texCoords=[];

 	for (var stack = 0; stack <= this.stacks; ++stack) {
 		for (var slice = 0; slice <= this.slices; ++slice) {
 			/* TODO: Corrigir normais */
 			this.vertices.push((this.bRadius + (dRadius * stack)) * Math.cos(slice*angulo),(this.bRadius + (dRadius * stack))*Math.sin(slice*angulo),stack * dHeight);
 			this.normals.push(Math.cos(slice*angulo),Math.sin(slice*angulo),0);
 			this.texCoords.push(slice/this.slices, stack/this.stacks);
 		}
 	}

 	this.indices=[];
 	for (var stack = 0; stack < this.stacks; ++stack) {
 		for (var slice = 0; slice < this.slices; ++slice) {
 			this.indices.push(stack * (this.stacks+1) + slice, stack * (this.stacks+1) + slice + 1, (stack+1) * (this.stacks+1) + slice + 1);
 			this.indices.push(stack * (this.stacks+1) + slice, (stack+1) * (this.stacks+1) + slice + 1, (stack+1) * (this.stacks+1) + slice);
 		}
 	}
	
    this.primitiveType=this.scene.gl.TRIANGLES;
	this.initGLBuffers();
 };

MyCylinder.prototype.scaleTexCoords = function(ampS, ampT) {
	this.updateTexCoordsGLBuffers();
}