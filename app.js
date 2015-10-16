// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var googleTranslate = require('google-translate')('AIzaSyAwa-GuHap0skrjW7IWqfLQ5c40Lfl_GkE');
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/quizdb');


var quizSchema = mongoose.Schema({
languages    : {type : String},
translations : {type : String}

});

var quizInfo = mongoose.model('quizInfo', quizSchema);

// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.sendFile('/home.html', {root : './public'});
});


app.get('/translate', function(req, res) {
	res.sendFile('/translate.html', {root : './public'});
});


// app.get('/translateform', function(req, res) {
// 	res.sendFile('/translateform.html', {root : './public'});
// });

app.get('/quiz', function(req, res) {
	res.sendFile('/quiz.html', {root : './public'});
});



app.get('/progress', function(req, res) {
	res.sendFile('/progress.html', {root : './public'});
});


app.post('/translate', function(req,res){
	// console.log(req.body.word) 
	

googleTranslate.translate(req.body.word, req.body.language, function(err, translation) {

	if(err){
		res.send("No Translation Found");
		console.log(err)

	}

	else{
  console.log(translation);
  res.send(translation)}


});
	
	// res.redirect('/translate')

});





// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})