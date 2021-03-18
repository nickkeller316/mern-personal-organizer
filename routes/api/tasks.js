const router = require("express").Router();
const tasksController = require("../../controllers/tasksController");

//  /api/tasks
router.route("/").get(tasksController.findAll).post(tasksController.create);

// /api/tasks/:id
router
	.route("/:id")
	.get(tasksController.findById)
	.put(tasksController.update)
	.delete(tasksController.remove);

module.exports = router;
