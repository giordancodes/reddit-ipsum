let goBtn = $( '#goBtn' ),
		num = $( '#num' ),
		results = $( '#results' );

let app = {};

app.ipsum = ['dank', 'pepe', 'you are doing that too much', 'reddit', 'ipsum', 'gold', 'downvote', 'cats', 'repost', 'original', 'content', 'subreddit', 'upvote', 'sticky', 'unidan', 'guidelines', 'tl;dr', 'front page', 'post', 'subscribe', 'switcheroo', 'links', 'news', 'reddiquette', 'self', 'gilded', 'scumbag'];

app.nsfw = ['Bill O\'Reilly', 'Taco Bell'];

app.single = '';

app.generated = [];

//function that defines a word
app.word = (x) => {
	
	app.single = _.sample(app.ipsum, x);
	return app.single.join(' ');

}

//function that defines a sentence, which is made up of words
app.sentence = (y) => {
	
	let sentenceBuild = '';
	
	while (y > 0){
		sentenceBuild = sentenceBuild + (app.word(Math.floor(Math.random() * (12 - 7)) + 7)) + '.';
		y --;
	}

	return sentenceBuild;
	
}

//function that defines a paragraph, which is made up of sentences
app.paragraph = (z) => {
	
		return app.sentence(Math.floor(Math.random() * (7 - 3)) + 3);
	
}

app.displayResults = () => {
	
//	return results from user's input
	goBtn.click(function( e ){
		
		e.preventDefault();		
		
//		check which radio option is selected and run appropriate function
		if ($( 'input:checked' ).val() === 'word'){
			app.generated = app.word(num.val());
		} else if ($( 'input:checked' ).val() === 'sentence'){
			app.generated = app.sentence(num.val());
		} else {
			app.generated = app.paragraph(num.val());
		};
		
		
		results.append(app.generated + ' ');
		
	})
}


app.go = function(){
	app.displayResults();
}

//document ready
$(document).ready(function() {
	
		app.go();
	
});