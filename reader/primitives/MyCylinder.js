/**
 * MyCilinder / MyCone (come on, we can do a cone with this!)
 * @constructor
 */
 function MyCylinder(scene, height, bRadius, tRadius, stacks, slices) {
 	CGFobject.call(this,scene);
	
	this.slices=slices;
	this.stacks=stacks;

	this.height=height;
	this.bRadius = bRadius;
	this.tRadius = tRadius;

	this.bBase = new MyCircle(scene,slices);
	this.tBase = new MyCircle(scene,slices);
	this.body = new MyCylinderBody(scene,height,bRadius,tRadius,stacks,slices);

 	this.initBuffers();
 };

 MyCylinder.prototype = Object.create(CGFobject.prototype);
 MyCylinder.prototype.constructor = MyCylinder;

MyCylinder.prototype.display = function() {
	/* Bottom circle */
	this.scene.pushMatrix();
		this.scene.scale(this.bRadius,this.bRadius,1);
		this.bBase.display();
	this.scene.popMatrix();

	/* Top circle */
	this.scene.pushMatrix();
		this.scene.translate(0,0,this.height);
		this.scene.scale(this.tRadius,this.tRadius,1);
		this.tBase.display();
	this.scene.popMatrix();

	/* Body */
	this.scene.pushMatrix();
		this.scene.scale(1,1,this.height);
		this.body.display();
	this.scene.popMatrix();
}

MyCylinder.prototype.drawCylinder = function() {
    var angulo = 2*Math.PI/this.slices;
 	var a = 0;
 	var b = 0;
 	

	this.vertices=[];
 	this.normals=[];

    /* TODO: A cena de se considerar o raio na base e no topo. Nao e dificil mas ja tenho sono a mais lel */
 	for(i = 0; i < this.stacks+1;i++){
 		for(j = 0; j < this.slices;j++){
 			/* As normais passam a ser iguais as coordenadas dos pontos */
 			this.vertices.push(Math.cos(j*angulo),Math.sin(j*angulo),i/this.stacks);
 			this.normals.push(Math.cos(j*angulo),Math.sin(j*angulo),0);
			a+=this.height/this.stacks;
 		}
 		a = 0;
 		b+=this.height/this.stacks;
 	}

 	this.indices=[];

	for(i=0; i < this.stacks;i++){
		for(j=0; j < this.slices;j++){
			this.indices.push(i*this.slices+j,i*this.slices+((j+1)%this.slices),(i+1)*this.slices+(j+1)%this.slices);
			this.indices.push(i*this.slices+j,(i+1)*this.slices+((j+1)%this.slices),(i+1)*this.slices+j);
		}
	}
 };