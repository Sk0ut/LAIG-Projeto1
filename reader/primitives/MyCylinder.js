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


 	this.initBuffers();
 };

 MyCylinder.prototype = Object.create(CGFobject.prototype);
 MyCylinder.prototype.constructor = MyCylinder;

 MyCylinder.prototype.initBuffers = function() {
	
 	this.drawCylinder();
 	this.drawBase(this.bRadius,0);
 	this.drawBase(this.tRadius,this.height);

 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };


//TODO: Arranjar o codigo abaixo para desenhar as bases dos circulos
//(usando os indices do cilindro).
//Alternativa: Criar um MyCircle e usa-lo.

/* MyCylinder.prototype.drawBase = function(radius,height) {
    var angulo = 2*Math.PI/this.slices;
 	var a = 0;
 	

	this.vertices=[];
 	this.normals=[];

 	for(j = 0; j < this.slices;j++){
 		this.vertices.push(Math.cos(j*angulo)*radius,Math.sin(j*angulo)*radius,height);
 		this.normals.push(0,0,1);
 	}

	for(j=0; j < this.slices-2;j++){
		this.indices.push(0,j+1,j+2);
	}
 }*/



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
 }