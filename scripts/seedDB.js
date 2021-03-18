const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
	process.env.MONGODB_URI ||
		"mongodb+srv://nicknate316:mern316@cluster0.iy2iv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

const taskSeed = [
	{
		text: "Take out the trash",
		day: "Friday at 2:30pm",
		reminder: true,
	},
	{
		text: "Do the Dishes",
		day: "Tomorrow at 8:00am",
		reminder: true,
	},
	{
		text: "Walk the Dog",
		day: "Today at 5:00pm",
		reminder: true,
	},
	{
		text: "Code",
		day: new Date(Date.now()),
		reminder: false,
	},
];

db.Task.remove({})
	.then(() => db.Task.collection.insertMany(taskSeed))
	.then((data) => {
		console.log(data.result.n + " records inserted!");
		process.exit(0);
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});
