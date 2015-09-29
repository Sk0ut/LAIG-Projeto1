/**
* My Triangle
*/

function MyTriangle(scene, x1,y1,z1,x2,y2,z2,x3,y3,z3){
    CGFobject.call(this,scene);

    this.x1 = x1;
    this.y1 = y1;
    this.z1 = z1;
    
    this.x2 = x2;
    this.y2 = y2;
    this.z2 = z2;

    this.x3 = x3;
    this.y3 = y3;
    this.z3 = z3;

    this.initBuffers();
}

MyTriangle.prototype = Object.create(CGFobject.prototype);

MyTriangle.prototype.constructor = MyTriangle;

MyTriangle.prototype.initBuffers = function() {

    this.vertices = [
        this.x1,this.y1,this.z1,
        this.x2,this.y2,this.z2,
        this.x3,this.y3,this.z3
    ];

    this.indices = [0,1,2];

	var A = {x: this.x1-this.x2, y: this.y1-this.y2, z: this.z1-this.z2};
	var B = {x: this.x1-this.x3, y: this.y1-this.y3, z: this.z1-this.z3};
	var N = {x: A.y*B.z-A.z*B.y, y: A.z*B.x-A.x*B.z, z: A.x*B.y-A.y*B.x};

	this.normals = [
		N.x, N.y, N.z,
		N.x, N.y, N.z,
		N.x, N.y, N.z
    ]

	this.texCoords = [
		0, 0,
		1, 0,
		1, 1
	]

    this.primitiveType=this.scene.gl.TRIANGLES;

	this.initGLBuffers();
}