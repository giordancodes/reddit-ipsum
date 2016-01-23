let goBtn = $( '#goBtn' ),
		results = $( '#results' );

let app = {};

app.ipsum = ['dank', 'pepe'];

app.nsfw = ['Bill O\'Reilly', 'Taco Bell'];

app.generated = [];

app.displayResults = () => {
	
//	return results from user's input
	goBtn.click(function( e ){
		
		e.preventDefault();
		
		app.generated = app.ipsum[Math.floor(Math.random() * app.nsfw.length)];
		
		console.log(app.generated);
		
	})
}

app.go = function(){
	app.displayResults();
}

$(document).ready(function() {
	
		app.go();
});