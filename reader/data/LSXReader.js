function LSXReader() {
    CGFXMLreader.call(this);
}

LSXReader.prototype = Object.create(CGFXMLreader.prototype);
LSXReader.prototype.constructor = LSXReader;

LSXReader.prototype.getRGBA = function(element, required) {
    if (required == undefined)
        required = true;
    if (element == null) {
        console.error("element is null");
        return null;
    }
    var rgba = [null, null, null, null];

    rgba[0] = element.getAttribute("r");
    if (rgba[0] == null) {
        if (required) console.error("value is null for r component of rgba.");
        return null;
    }

    rgba[1] = element.getAttribute("g");
    if (rgba[1] == null) {
        if (required) console.error("value is null for g component of rgba.");
        return null;
    }
    
    rgba[2] = element.getAttribute("b");
    if (rgba[2] == null) {
        if (required) console.error("value is null for b component of rgba.");
        return null;
    }

    rgba[3] = element.getAttribute("a");
    if (rgba[3] == null) {
        if (required) console.error("value is null for a component of rgba.");
        return null;
    }

    return rgba;
}

LSXReader.prototype.getArrayOfFloats = function(element, attributeName, numFloats, required) {
    if (required == undefined)
        required = true;
    
    if (element == null) {
        console.error("element is null.");
        return null;
    }
    if (attributeName == null) {
        console.error("attribute name is null.");
        return null;
    }
    var attribute = element.getAttribute(attributeName);
    if (attribute == null) {
        if (required) console.error("value is null for attribute " + attributeName + ".");
        return null;
    }

    var floats = attribute.split(' ');
    
    if (floats.length != numFloats) {
        console.error("invalid " + floats.length + " number of floats for attribute " + attributeName + ".");
        return null;
    }

    var arrayOfFloats = new Array();
    for (var i = 0; i < floats.length; i++)
        arrayOfFloats.push(parseFloat(floats[i]));
    return arrayOfFloats;
}

LSXReader.prototype.getRectangle = function(element, attributeName, required) {
    return this.getArrayOfFloats(element, attributeName, 4, required);
}

LSXReader.prototype.getCylinder = function(element, attributeName, required) {
    return this.getArrayOfFloats(element, attributeName, 5, required);
}

LSXReader.prototype.getSphere = function(element, attributeName, required) {
    return this.getArrayOfFloats(element, attributeName, 3, required);
}

LSXReader.prototype.getTriangle = function(element, attributeName, required) {
    return this.getArrayOfFloats(element, attributeName, 9, required);
}