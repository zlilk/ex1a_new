var express = require('express');
var gradesMd = require('./grades_md');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://db_usr:db_pass@ds023570.mlab.com:23570/grades_zlil');

var port = process.env.PORT || 3000;

var conn = mongoose.connection;

conn.on('error', function(err) {
	console.log('connection error' + err);
});

conn.once('open', function(){
	console.log('connected.');
});

//geting all students data
app.get('/studsData', function(req,res) {
   gradesMd.getAllStudentsData(function(data) {
   	   res.json(data);
   });
});

//getting a student grade by id
app.get('/gradeById/:id', function(req,res) {
   gradesMd.getStudGradeById(req.params.id, function(data) {
   		res.json(data);
   });
});

//getting all students grades by age
app.get('/gradeByAge/:age', function(req,res) {
   gradesMd.getStudsGradeByAge(req.params.age, function(data) {
   		res.json(data);
   });
});


app.listen(port);
console.log('listening on port ' + port);


