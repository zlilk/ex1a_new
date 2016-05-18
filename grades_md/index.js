var mongoose = require('mongoose');
var Student = require('../student');

//returns all students data
exports.getAllStudentsData = function(callback) {
    Student.find({}).exec(function(err, student){
        if(err) throw err;
        callback(student);
    });
}

//returns student grade by id
exports.getStudGradeById = function(_id, callback) {
	   Student.find({id:_id}).exec(function(err, student){
        if(err) throw err;
        callback(student);
    });
}

//returns students grades by age
exports.getStudsGradeByAge = function(_age, callback){
       Student.find({age:_age}).exec(function(err, student){
        if(err) throw err;
        callback(student);
    });
} 
