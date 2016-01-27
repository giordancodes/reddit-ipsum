let goBtn = $( '#goBtn' ),
		num = $( '#num' ),
		results = $( '#results' );

let app = {};

app.ipsum = ['dank', 'pepe', 'you are doing that too much', 'reddit', 'ipsum', 'gold', 'downvote', 'cats', 'repost', 'original', 'content', 'subreddit', 'upvote', 'sticky', 'unidan', 'guidelines', 'tl;dr', 'front page', 'post', 'subscribe', 'switcheroo', 'links', 'news', 'reddiquette', 'self', 'gilded', 'scumbag', 'vega', 'troll', 'OP'];

app.nsfw = ['Bill O\'Reilly', 'Taco Bell'];

app.single = '';

app.generated = [];

//function that defines a word
app.word = (x) => {
	
	app.single = _.sample(app.ipsum, x);
	return app.single.join(' ');

}

//function that defines a sentence, which is made up of 7-12 words
app.sentence = (y) => {
	
	let sentenceBuild = '';
	
	while (y > 0){
		sentenceBuild = sentenceBuild + (app.word(Math.floor(Math.random() * (12 - 7)) + 7)).capitalize() + '. ';
		y --;
	}

	return sentenceBuild;
	
}

//function that defines a paragraph, which is made up of 3-9 sentences
app.paragraph = (z) => {
	
	let paragraphBuild = '';
	
	while (z > 0){
		paragraphBuild = paragraphBuild + '<p>' + (app.sentence(Math.floor(Math.random() * (9 - 3)) + 3)) + '</p>';
		z --;
	}
	
	return paragraphBuild;
	
}

app.displayResults = () => {
	
//	return results from user's input
	goBtn.click(function( e ){
		
		e.preventDefault();		
		
//		make sure num is > 0
		
		if (num.val() < 1){
			alert('Only positive numbers will be successful.')
		}
		
//		check which radio option is selected and run appropriate function
		if ($( 'input:checked' ).val() === 'word'){
			app.generated = app.word(num.val());
		} else if ($( 'input:checked' ).val() === 'sentence'){
			app.generated = app.sentence(num.val());
		} else {
			app.generated = app.paragraph(num.val());
		};
		
		results.html(app.generated + ' ');
		
	})
}


app.go = function(){
	app.displayResults();
}

//document ready
$(document).ready(function() {
	
		app.go();
	
});