(function() {
	// Creates an object based in the HTML Element prototype
	var el = Object.create(HTMLElement.prototype);

	// Fires when an instance of the element is created
	el.createdCallback = function() {

	};

	// Fires when an instance was inserted into the document
	el.attachedCallback = function() {

		// gather options
		var self = this;
		var options = {
		};
		// ...
		// shadowroot option (resolve issues before exposing as option...)
		var hidden = false;
		options.el = ( hidden ) ? this.createShadowRoot() : this;
		// instantiate view
		this.view = new APP.UI.Modal( options );

	};

	// Fires when an instance was removed from the document
	el.detachedCallback = function() {
		if( this.view ) this.view.destroy();
	};

	// Fires when an attribute was added, removed, or updated
	el.attributeChangedCallback = function(attr, oldVal, newVal) {
		// prerequisite(s)
		if(!this.view) return;
		if( attr == "class") return;

		// filter options?
		this.view.options[attr] = newVal;
		this.view.update();

	};

	document.registerElement('ui-modal', {
		prototype: el
	});

}());
