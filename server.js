const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

//middlewear
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//serve up static assets (heroku)
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

//connect to the MONGO DB
mongoose.connect(
	process.env.MONGODB_URI ||
		"mongodb+srv://nicknate316:mern316@cluster0.iy2iv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

//start the API server
app.listen(PORT, function () {
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
