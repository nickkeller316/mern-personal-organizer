import "bootstrap/dist/css/bootstrap.min.css";
import "../../src/index.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import API from "../utils/API";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Tasks from "../components/Tasks";
import AddTask from "../components/AddTask";
import Task from "../components/Task";

const TaskPage = () => {
	const [showAddTask, setShowAddTask] = useState(false);
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		fetchTasks();
	}, []);

	//fetch tasks
	function fetchTasks() {
		API.getTasks()
			.then((res) => setTasks(res.data))
			.catch((err) => console.log(err));
	}

	//fetch task
	function fetchTask() {
		API.getTask()
			.then((res) => setTasks(res.data))
			.catch((err) => console.log(err));
	}

	//delete task
	function deleteTask(id) {
		API.deleteTask(id)
			.then((res) => fetchTasks())
			.catch((err) => console.log(err));
	}

	//add task
	function addTask(text, day, reminder) {
		console.log(tasks);
		//event.preventDefault();
		if (text && day) {
			console.log("saving");
			API.saveTask({
				text: text,
				day: day,
				reminder: reminder,
			})
				.then(() =>
					setTasks({
						text: "",
						day: "",
						reminder: "",
					})
				)
				.then(() => fetchTasks())
				.catch((err) => console.log(err));
		}
	}

	//toggle reminder
	//toggle reminder
	const toggleReminder = async (id) => {
		const taskToToggle = await fetchTask(id);
		const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };
		const res = await fetch(`http://localhost:3001/api/tasks/${id}`, {
			method: "PUT",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(updTask),
		});
		const data = await res.json();
		setTasks(
			tasks.map((task) =>
				task.id === id ? { ...task, reminder: data.reminder } : task
			)
		);
	};
	return (
		<Router>
			<div className="container">
				<Header
					onAdd={() => setShowAddTask(!showAddTask)}
					showAdd={showAddTask}
				/>
				<Route
					path="/"
					exact
					render={(props) => (
						<>
							{showAddTask && <AddTask onAdd={addTask} />}
							{tasks.length > 0
								? tasks.map((task, index) => (
										<Task
											key={index}
											task={task}
											onDelete={() => deleteTask(task._id)}
											onToggle={toggleReminder}
										/>
								  ))
								: "No Tasks to Show"}
						</>
					)}
				/>
				{/* <Route path="/about" component={About} /> */}
				<Footer />
			</div>
		</Router>
	);
};

export default TaskPage;
