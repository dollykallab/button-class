/* 
button.js
@Author: Dolly Kallab
Date: 04-12-2016
Description: Custom button component class for in-class experiment
Dependencies: jQuery
Options:
	container: STRING 	jQuery css selector that will be the target container
	opts: OBJECT 		JSON container CSS Style & button text value
	callback: FUNCTION 	function on click
*/

function Button(container, opts, callback){
	var component = {
		init: function(){

			this.container = container;
			this.opts = opts;
			this.callback = callback;
			this.id = "Button-" + Math.random().toString(36).substring(4);

			this.render();

		},
		makeCSS: function(){
			var css ="#" + this.id + "{"
						 + "background-color:" + this.opts.backgroundColor + ";"
						 + "color:" + this.opts.textColor + ";"
						 + "border: 1px solid " + this.opts.backgroundColor + ";"
					 + "}";

					 this.css = css;

		},
		makeHTML: function(){
			var html = "<button id='" +this.id + "' class='custom-class'>"
						+ this.opts.text
					+ "</button>";

					this.html = html;

		},
		render: function(){

			this.makeCSS();
			this.makeHTML();

			$(this.container).append('<style>' + this.css + '</style>');

			$(this.container).append(this.html);

			this.bind();

		},
		bind: function(){
				$('#' + this.id).on('click', this.callback);

		},
		destroy: function(){
			$('#' + this.id).remove();
			delete this;
		}
	};

	component.init();

	return component;
}


$('document').ready(function(){


	var buttonTest = new Button("#button-container", {
		textColor:"#fff",
		backgroundColor: "#000",
		borderColor: "#ff0",
		text: "Click here!!! said Carlos. "
	}, function(){
		console.log("Hello from the black button.");
	});

});