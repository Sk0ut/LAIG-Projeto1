function MySceneData(lsxFile) {
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

MySceneData.prototype = Object.create(Object.prototype);
MySceneData.prototype.constructor = MySceneData;

MySceneData.prototype.onXMLReady = function() {
    var rootElement = this.reader.xmlDoc.documentElement;
    console.log(rootElement.childNodes);
}

MySceneData.prototype.onXMLError = function(message) {
    console.error("XML Loading Error: " + message);
}