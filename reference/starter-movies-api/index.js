const express = require("express");
const app = express();
const PORT = 8080;

// about our API
app.get("/about", (req, res) => {
	res.send("This is an API service for CRUD actions on movies resources.");
});

// the {name} value is dynamic based on the URL provided.
app.get("/about/:name", (req, res) => {
	const name = req.params.name;
	res.send("This is an API service for CRUD actions on a movies resource...for you " + name);
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});
