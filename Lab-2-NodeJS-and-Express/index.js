// import Express
const express = require("express");

// Create an Express app
const app = express();

// Hello, world!
app.get("/", (req, res) => {
    res.send('Hello, world!');
});

// Hello, {you}!
app.get("/:you", (req, res) => {
    res.send(`Hello, ${req.params.you}!`);
});

// Define the server port or default to 8080
const PORT = process.env.PORT || 8080;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
