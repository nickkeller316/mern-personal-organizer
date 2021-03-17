const express = require("express");
const router = express.Router();

//Task model
const Task = require("../../models/TaskScheme");

//route GET api/tasks
// GET all tasks
router.get("/", (req, res) => {
	Task.find()
		.sort({ date: -1 })
		.then((tasks) => res.json(tasks));
});

//POST api/tasks
// create a new task
router.post("/", (req, res) => {
	const newTask = new Task({
		task: req.body.task,
	});
	newTask.save().then((task) => res.json(task));
});

//DELETE
router.delete("/:id", (req, res) => {
	Task.findById(req.params.id)
		.then((item) => item.remove().then(() => res.json({ success: true })))
		.catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
