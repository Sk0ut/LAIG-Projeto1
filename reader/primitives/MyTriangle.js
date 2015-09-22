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

    /* E preciso perguntar se ha algum standard
    para os pontos, porque e impossivel coloca-los no/contra ou
    sentido dos ponteiros do relogio sem termos a certeza da sua
    posicao */
    // TODO: Pintar ou nao os 2 lados da face consoante pedido
    this.indices = [0,1,2];

    this.primitiveType=this.scene.gl.TRIANGLES;

    // TODO: Alterar consoante ser CCW ou CW
	this.normals = [
			0,0,1,
			0,0,1,
			0,0,1,
			0,0,1
    ]

	this.initGLBuffers();
}