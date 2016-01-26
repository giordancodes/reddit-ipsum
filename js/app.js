'use strict';

var goBtn = $('#goBtn'),
    num = $('#num'),
    results = $('#results');

var app = {};

app.ipsum = ['dank', 'pepe', 'you are doing that too much', 'reddit', 'ipsum', 'gold', 'downvote', 'cats', 'repost', 'original', 'content', 'subreddit', 'upvote', 'sticky', 'unidan', 'guidelines', 'tl;dr', 'front page', 'post', 'subscribe', 'switcheroo', 'links', 'news', 'reddiquette', 'self', 'gilded', 'scumbag'];

app.nsfw = ['Bill O\'Reilly', 'Taco Bell'];

app.generated = [];

//function that defines a word
app.word = function (x) {

	app.generated = _.sample(app.ipsum, x);
	return app.generated.join(' ');
};

//function that defines a sentence, which is made up of words
app.sentence = function (y) {

	return app.word(Math.floor(Math.random() * (11 - 7)) + 7);
};

//function that defines a paragraph, which is made up of sentences
app.paragraph = function (z) {};

app.displayResults = function () {

	//	return results from user's input
	goBtn.click(function (e) {

		e.preventDefault();

		app.generated = app.word(num.val());

		results.append(app.generated + ' ');
	});
};

app.go = function () {
	app.displayResults();
};

//document ready
$(document).ready(function () {

	app.go();
});