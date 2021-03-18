import axios from "axios";

export default {
	//gets all tasks
	getTasks: function () {
		return axios.get("/api/tasks");
	},
	getTask: function (id) {
		return axios.get("/api/tasks/" + id);
	},
	//delete
	deleteTask: function (id) {
		return axios.delete("/api/tasks/" + id);
	},
	//saves a task to the db
	saveTask: function (taskData) {
		return axios.post("/api/tasks", taskData);
	},
};
