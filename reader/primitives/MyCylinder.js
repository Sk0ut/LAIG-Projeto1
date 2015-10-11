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

 	for(i = 0; i < this.stacks+1;i++){
 		for(j = 0; j < this.slices;j++){
 			/* TODO: Corrigir normais */
 			this.vertices.push((this.bRadius + (dRadius * i))*Math.cos(j*angulo),(this.bRadius + (dRadius * i))*Math.sin(j*angulo),i * dHeight);
 			this.normals.push(Math.cos(j*angulo),Math.sin(j*angulo),0);
 		}
 	}

 	this.indices=[];

	for(i=0; i < this.stacks;i++){
		for(j=0; j < this.slices;j++){
			this.indices.push(i*this.slices+j,i*this.slices+((j+1)%this.slices),(i+1)*this.slices+(j+1)%this.slices);
			this.indices.push(i*this.slices+j,(i+1)*this.slices+((j+1)%this.slices),(i+1)*this.slices+j);
		}
	}
	
    this.primitiveType=this.scene.gl.TRIANGLES;
	this.initGLBuffers();
 };

MyCylinder.prototype.scaleTexCoords = function(ampS, ampT) {
	this.updateTexCoordsGLBuffers();
}