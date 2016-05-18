var mongoose = require('mongoose');
var schema = mongoose.Schema;
var studentSchema = new schema({
	name: {type:String,required:true},
    id: {type:String, index:1, required:true, unique:true},
    grade: {type:String,required:true},
    age: {type:String,required:true}
}, {collection: 'students'});

var Student = mongoose.model('students', studentSchema);
module.exports = Student;