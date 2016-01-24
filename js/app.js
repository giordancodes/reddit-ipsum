'use strict';

var goBtn = $('#goBtn'),
    results = $('#results');

var app = {};

app.ipsum = ['dank', 'pepe', 'you are doing that too much', 'reddit', 'ipsum', 'gold', 'downvote', 'cats', 'repost', 'original', 'content', 'subreddit', 'upvote', 'sticky', 'unidan', 'guidelines', 'tl;dr', 'front page', 'post', 'subscribe', 'switcheroo', 'links', 'news', 'reddiquette', 'self', 'gilded'];

app.nsfw = ['Bill O\'Reilly', 'Taco Bell'];

app.generated = [];

app.displayResults = function () {

	//	return results from user's input
	goBtn.click(function (e) {

		e.preventDefault();

		app.generated = app.ipsum[Math.floor(Math.random() * app.ipsum.length)];

		results.append(app.generated + ' ');
	});
};

app.go = function () {
	app.displayResults();
};

$(document).ready(function () {

	app.go();
});