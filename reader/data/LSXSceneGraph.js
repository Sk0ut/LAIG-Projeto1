function LSXSceneGraph(filename, scene) {
    if (typeof scene.onGraphLoaded !== 'function') {
		console.error("onGraphLoaded not defined in scene");
		return;
	}
	this.loadedOk = null;
	
    this.initials = new SceneInitials();
    this.illumination = new SceneIllumination();
    this.textures = [];
    this.leaves = [];


	// Establish bidirectional references between scene and graph
	this.scene = scene;
	scene.graph=this;
		
	// File reading 
	this.reader = new LSXReader();

	/*
	 * Read the contents of the xml file, and refer to this class for loading and error handlers.
	 * After the file is read, the reader calls onXMLReady on this object.
	 * If any error occurs, the reader calls onXMLError on this object, with an error message
	 */
	 
	this.reader.open('scenes/'+filename, this);  
}

/*
 * Callback to be executed after successful reading
 */
LSXSceneGraph.prototype.onXMLReady=function() 
{
	console.log("XML Loading finished.");
	var rootElement = this.reader.xmlDoc.documentElement;
	
	// Here should go the calls for different functions to parse the various blocks
	var error = this.parseSceneGraph(rootElement);

	if (error != null) {
		this.onXMLError(error);
		return;
	}

	this.loadedOk=true;
	
	// As the graph loaded ok, signal the scene so that any additional initialization depending on the graph can take place
	this.scene.onGraphLoaded();
};

LSXSceneGraph.prototype.parseSceneGraph = function(rootElement) {
    if (rootElement.nodeName != "SCENE") {
        return "Not a SCENE file";
    }

    var error = this.parseInitials(rootElement);
    if (error) {
        return error;
    }

    error = this.parseIllumination(rootElement);
    if (error) {
        return error;
    }

    error = this.parseLights(rootElement);
    if (error) {
        return error;
    }

    error = this.parseTextures(rootElement);
    if (error) {
        return error;
    }

    error = this.parseMaterials(rootElement);
    if (error) {
        return error;
    }

    error = this.parseLeaves(rootElement);
    if (error) {
        return error;
    }

    error = this.parseNodes(rootElement);
    if (error) {
        return error;
    }

    this.loadedOk = true;
}

// TODO: parse rotation
LSXSceneGraph.prototype.parseInitials = function(rootElement) {

	var elems =  rootElement.getElementsByTagName("INITIALS");
	if (elems == null) {
		return "INITIALS element is missing.";
	}

	if (elems.length != 1) {
		return "either zero or more than one 'INITIALS' element found.";
	}

	var initials = elems[0];
	
	elems = initials.getElementsByTagName("frustum");
	if (elems == null) {
	    return "frustum element in INITIALS is missing.";
	}
	if (elems.length != 1) {
	    return "either zero or more than one 'frustum' element found in INITIALS.";
	}

	var frustum = elems[0];

	this.initials.frustum.near = this.reader.getFloat(frustum, "near");
	this.initials.frustum.far = this.reader.getFloat(frustum, "far");

    elems = initials.getElementsByTagName("translation");
	if (elems == null) {
	    return "translation element in INITIALS is missing.";
	}
	if (elems.length != 1) {
	    return "either zero or more than one 'translation' element found in INITIALS.";
	}

    var translation = elems[0];
    var translationData = vec3.create();
    translationData[0] = this.reader.getFloat(translation, "x");
    translationData[1] = this.reader.getFloat(translation, "y");
    translationData[2] = this.reader.getFloat(translation, "z");

    mat4.translate(this.initials.transformationMatrix, this.initials.transformationMatrix, translationData);

    elems = initials.getElementsByTagName("rotation");
	if (elems == null) {
	    return "rotation element in INITIALS is missing.";
	}
    if (elems.length != 3) {
        return "3 'rotation' elements needed in INITIALS";
    }

    /* TODO: parse rotation */

    elems = initials.getElementsByTagName("scale");
	if (elems == null) {
	    return "scale element in INITIALS is missing.";
	}
	if (elems.length != 1) {
	    return "either zero or more than one 'scale' element found in INITIALS.";
	}

	var scale = elems[0];
    var scaleData = vec3.create();
    scaleData[0] = this.reader.getFloat(scale, "sx");
    scaleData[1] = this.reader.getFloat(scale, "sy");
    scaleData[2] = this.reader.getFloat(scale, "sz");
    mat4.scale(this.initials.transformationMatrix, this.initials.transformationMatrix, scaleData);

    elems = initials.getElementsByTagName("reference");
	if (elems == null) {
	    return "reference element in INITIALS is missing.";
	}
	if (elems.length != 1) {
	    return "either zero or more than one 'reference' element found in INITIALS.";
	}

	var reference = elems[0];
	this.initials.referenceLength = this.reader.getFloat(reference, "length");

	this.initials;
};

LSXSceneGraph.prototype.parseIllumination = function(rootElement) {
	var elems =  rootElement.getElementsByTagName("ILLUMINATION");
	if (elems == null) {
		return "ILLUMINATION element is missing.";
	}

	if (elems.length != 1) {
		return "either zero or more than one 'ILLUMINATION' element found.";
	}

	var illumination = elems[0];

    elems = illumination.getElementsByTagName("ambient");
    if (elems == null) {
		return "ambient element in ILLUMINATION is missing.";
	}

	if (elems.length != 1) {
		return "either zero or more than one 'ambient' element found in ILLUMINATION.";
	}

	var ambient = elems[0];
	this.illumination.ambient = this.reader.getRGBA(ambient);

    elems = illumination.getElementsByTagName("background");
    if (elems == null) {
		return "background element in ILLUMINATION is missing.";
	}

	if (elems.length != 1) {
		return "either zero or more than one 'background' element found in ILLUMINATION.";
	}

	var background = elems[0];
	this.illumination.background = this.reader.getRGBA(background);

}

LSXSceneGraph.prototype.parseLights = function(rootElement) {
    var elems =  rootElement.getElementsByTagName("LIGHTS");
	if (elems == null) {
		return "LIGHTS element is missing.";
	}

	if (elems.length != 1) {
		return "either zero or more than one 'LIGHTS' element found.";
	}

	var lights = elems[0];
}

LSXSceneGraph.prototype.parseTextures = function(rootElement) {
    var elems =  rootElement.getElementsByTagName("TEXTURES");
	if (elems == null) {
		return "TEXTURES element is missing.";
	}

	if (elems.length != 1) {
		return "either zero or more than one 'TEXTURES' element found.";
	}

	var textures = elems[0];

	elems = textures.getElementsByTagName("TEXTURE");

	if (elems == null) {
		console.log("TEXTURE element in TEXTURES missing");
		return;
	}
	if (elems.length == 0) {
		console.log("zero 'TEXTURE' elements found");
		return;
	}

	for (var i = 0; i < elems.length; ++i) {
		var texture = elems[i];
		var id = this.reader.getString(texture, "id");
		var url = this.reader.getString(texture.children[0], "path");
		var s = this.reader.getFloat(texture.children[1], "s");
		var t = this.reader.getFloat(texture.children[1], "t");
/*		this.textures.push(new SceneTexture(this.scene, url, id));
		this.textures[i].setAmplifyFactor(s,t);
*/	}
}

LSXSceneGraph.prototype.parseMaterials = function(rootElement) {
    var elems =  rootElement.getElementsByTagName("MATERIALS");
	if (elems == null) {
		return "MATERIALS element is missing.";
	}

	if (elems.length != 1) {
		return "either zero or more than one 'MATERIALS' element found.";
	}

	var materials = elems[0];
}

LSXSceneGraph.prototype.parseLeaves = function(rootElement) {
    var elems =  rootElement.getElementsByTagName("LEAVES");
	if (elems == null) {
		return "LEAVES element is missing.";
	}

	if (elems.length != 1) {
		return "either zero or more than one 'LEAVES' element found.";
	}

	var leaves = elems[0];

	elems = leaves.getElementsByTagName("LEAF");

	if (elems == null) {
		return "LEAF element in LEAVES missing";
	}
	if (elems.length == 0) {
		return "zero 'LEAF' elements found"
	}

	for (var i = 0; i < elems.length; ++i) {
		var id = this.reader.getString(elems[i], "id");
		var type = this.reader.getString(elems[i], "type");
		var data;

		switch (type) {
			case "rectangle":
			data = this.reader.getRectangle(elems[i], "args");
			this.leaves.push(new SceneGraphLeafRectangle(id, data[0], data[1], data[2], data[3]));
			break;
			case "cylinder":
			data = this.reader.getCylinder(elems[i], "args");
			this.leaves.push(new SceneGraphLeafCylinder(id, data[0], data[1], data[2], data[3], data[4]));
			break;
			case "sphere":
			data = this.reader.getSphere(elems[i], "args");
			this.leaves.push(new SceneGraphLeafSphere(id, data[0], data[1], data[2]));
			break;
			case "triangle":
			data = this.reader.getTriangle(elems[i], "args");
			this.leaves.push(new SceneGraphLeafTriangle(id, data[0], data[1], data[2], data[3], data[4], data[5], data[6], data[7], data[8]));
			break;
			default:
			return "Unknown LEAF type: " + type;
		}
	}
}

LSXSceneGraph.prototype.parseNodes = function(rootElement) {
    var elems =  rootElement.getElementsByTagName("NODES");
	if (elems == null) {
		return "NODES element is missing.";
	}

	if (elems.length != 1) {
		return "either zero or more than one 'NODES' element found.";
	}

	var nodes = elems[0];
}
	
/*
 * Callback to be executed on any read error
 */
 
LSXSceneGraph.prototype.onXMLError=function (message) {
	console.error("XML Loading Error: "+message);	
	this.loadedOk=false;
};


