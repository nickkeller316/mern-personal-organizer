const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const tasks = require("./routes/api/tasks");

const app = express();

//Bodyparser middlewear
app.use(bodyParser.json());

//DB Config
const db = require("./config/keys").mongoURI;

//connect to mongo
mongoose
	.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log("MongoDB Connected...."))
	.catch((err) => console.log(err));

app.use("/api/tasks", tasks);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
