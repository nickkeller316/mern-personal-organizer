const mongoose = require("mongoose");
const { boolean } = require("yargs");
const Schema = mongoose.Schema;

//creating Schema
const TaskSchema = new Schema({
	text: {
		type: String,
		required: true,
	},
	date: {
		type: String,
		required: true,
	},
	reminder: {
		type: Boolean,
	},
});

module.exports = Task = mongoose.model("task", TaskSchema);
