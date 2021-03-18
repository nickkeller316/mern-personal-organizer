const router = require("express").Router();
const taskRoutes = require("./tasks");

//task routes
router.use("/tasks", taskRoutes);

module.exports = router;
