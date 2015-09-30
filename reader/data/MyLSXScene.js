function MyLSXScene(application, lsxFile) {
    CGFscene.prototype.init.call(this, application);

    this.reader = new CGFXMLreader();
    this.reader.open('scenes/' + lsxFile, this);

    this.initials = new SceneInitials();
    this.illumination = new SceneIllumination();
    this.lights = [];
    this.textures = [];
    this.materials = [];
    this.leaves = [];
    this.elements = new SceneElements();
}

MyLSXScene.prototype = Object.create(CGFscene.prototype);
MyLSXScene.prototype.constructor = MyLSXScene;

MyLSXScene.prototype.onXMLReady = function() {
    var rootElement = this.reader.xmlDoc.documentElement;
    console.log(rootElement.childNodes);
}

MyLSXScene.prototype.onXMLError = function(message) {
    console.error("XML Loading Error: " + message);
}