const mongoose = require("mongoose");
const { boolean } = require("yargs");
const Schema = mongoose.Schema;

//creating Schema
const taskSchema = new Schema({
	text: {
		type: String,
		required: true,
	},
	day: {
		type: String,
		required: true,
	},
	reminder: {
		type: Boolean,
		required: true,
	},
});

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
