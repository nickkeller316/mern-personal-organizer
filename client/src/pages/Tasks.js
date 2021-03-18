import "bootstrap/dist/css/bootstrap.min.css";
import "../../src/index.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import API from "../utils/API";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Tasks from "../components/Tasks";
import AddTask from "../components/AddTask";

const Task = () => {
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

	function fetchTask() {
		API.getTask()
			.then((res) => setTasks(res.data))
			.catch((err) => console.log(err));
	}
	function deleteTask(id) {
		API.deleteTask(id)
			.then((res) => fetchTasks())
			.catch((err) => console.log(err));
	}
	function addTask(event) {
		event.preventDefault();
		if (tasks.text && tasks.day) {
			API.saveTask({
				text: tasks.text,
				day: tasks.day,
				reminder: tasks.reminder,
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
							{tasks.length > 0 ? (
								<Tasks
									tasks={tasks}
									onDelete={deleteTask}
									onToggle={toggleReminder}
								/>
							) : (
								"No Tasks to Show"
							)}
						</>
					)}
				/>
				{/* <Route path="/about" component={About} /> */}
				<Footer />
			</div>
		</Router>
	);
};

export default Task;
