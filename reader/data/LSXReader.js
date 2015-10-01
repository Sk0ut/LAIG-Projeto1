function LSXReader() {
    CFGXMLreader.call(this);
}

LSXReader.prototype = Object.create(CFGXMLreader.prototype);
LSXReader.prototype.constructor = LSXReader;

LSXReader.prototype.getArrayOfFloats(element, attributeName, numFloats, required) {
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

LSXReader.prototype.getRectangle(element, attributeName, required) {
    return this.getArrayOfFloats(element, attributeName, 4, required);
}

LSXReader.prototype.getCylinder(element, attributeName, required) {
    return this.getArrayOfFloats(element, attributeName, 5, required);
}

LSXReader.prototype.getSphere(element, attributeName, required) {
    return this.getArrayOfFloats(element, attributeName, 3, required);
}

LSXReader.prototype.getTriangle(element, attributeName, required) {
    return this.getArrayOfFloats(element, attributeName, 9, required);
}