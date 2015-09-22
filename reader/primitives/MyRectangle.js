/**
* My Triangle
*/

function MyRectangle(scene, x1,y1,x2,y2){
    CGFobject.call(this,scene);

    this.x1 = x1;
    this.y1 = y1;
    
    this.x2 = x2;
    this.y2 = y2;

    this.initBuffers();
}

MyRectangle.prototype = Object.create(CGFobject.prototype);

MyRectangle.prototype.constructor = MyRectangle;

MyRectangle.prototype.initBuffers = function() {

    this.vertices = [
        this.x1,this.y1,0,
        this.x1,this.y2,0,
        this.x2,this.y1,0,
        this.x2,this.y2,0
    ];

    /* E preciso perguntar se ha algum standard
    para os pontos, porque e impossivel coloca-los no/contra ou
    sentido dos ponteiros do relogio sem termos a certeza da sua
    posicao */
    // TODO: Pintar ou nao os 2 lados da face consoante pedido
    // TODO: Alterar consoante ser CCW ou CW
    this.indices = [
        3,1,0,
        0,2,3
    ];

    this.primitiveType=this.scene.gl.TRIANGLES;

	this.normals = [
			0,0,1,
			0,0,1,
			0,0,1,
			0,0,1
    ]

	this.initGLBuffers();
}