'use strict';

var goBtn = $('#goBtn'),
    num = $('#num'),
    minus = $('#minus'),
    plus = $('#plus'),
    copyAll = $('section.copyAll'),
    results = $('#results');

var app = {};

app.ipsum = ['dank', 'pepe', 'you are doing that too much', 'reddit', 'ipsum', 'gold', 'downvote', 'cats', 'repost', 'original', 'content', 'subreddit', 'upvote', 'sticky', 'unidan', 'guidelines', 'TL;DR', 'front page', 'post', 'subscribe', 'switcheroo', 'links', 'news', 'reddiquette', 'self', 'gilded', 'scumbag', 'vega', 'troll', 'OP', 'MRW', 'hot', 'new', 'rising', 'wiki', 'kitty', 'sweet', 'pooch', 'nailed', 'TIL', 'aww', 'IRL', 'meme', 'internets', 'karma', 'n64', 'bacon', 'Bernie Sanders', 'sanic'];

app.nsfw = ['Bill O\'Reilly', 'Taco Bell', 'shitpost', 'gonewild'];

app.single = '';

app.generated = [];

//function for capitalizing 1st letter in a string
app.capitalize = function (str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
};

//function that defines a word
app.word = function (x) {

	app.single = _.sample(app.ipsum, x);
	return app.single.join(' ');
};

//function that defines a sentence, which is made up of 7-12 words
app.sentence = function (y) {

	var sentenceBuild = '';

	while (y > 0) {
		sentenceBuild = sentenceBuild + app.capitalize(app.word(Math.floor(Math.random() * (12 - 7)) + 7)) + '. ';
		y--;
	}

	return sentenceBuild;
};

//function that defines a paragraph, which is made up of 3-9 sentences
app.paragraph = function (z) {

	var paragraphBuild = '';

	while (z > 0) {
		paragraphBuild = paragraphBuild + '<p>' + app.sentence(Math.floor(Math.random() * (9 - 3)) + 3) + '</p>';
		z--;
	}

	return paragraphBuild;
};

//plus and minus button increment number input
app.math = function () {

	minus.click(function (e) {
		//		button click wont reload page
		e.preventDefault();

		var current = num.val();
		num.val(current - 1);
	});

	plus.click(function (e) {
		//		button click wont reload page
		e.preventDefault();

		var cur = num.val();
		num.val(parseInt(cur) + 1);
	});
};

app.displayResults = function () {

	//	return results from user's input
	goBtn.click(function (e) {

		//		button click wont reload page
		e.preventDefault();

		//		make sure num is > 0
		if (num.val() < 1) {
			alert('Only positive numbers will be successful.');
		}

		//		check which radio option is selected and run appropriate function
		if ($('input:checked').val() === 'word') {
			app.generated = app.word(num.val());
		} else if ($('input:checked').val() === 'sentence') {
			app.generated = app.sentence(num.val());
		} else {
			app.generated = app.paragraph(num.val());
		};

		//		display results
		results.html('<pre>' + app.generated + '</pre>');

		//		scroll to results
		$('#results').focus();
		$('body,html').animate({ scrollTop: $('#results').offset().top });
		copyAll.removeClass('hidden');
	});
};

//one function to run at page load
app.go = function () {
	app.math();
	$('a').smoothScroll();
	$('#').smoothScroll();
	app.displayResults();
	new Clipboard('#copyAll');
};

//document ready
$(document).ready(function () {
	app.go();
});