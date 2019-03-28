import express from "express";

const app = express();
let counter = 0;

app.get("/", (req, res) => {
	counter++;
	res.send(`<h1>This page has been seen ${counter} times!`);
    });

const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 3000;
app.listen(port, host, () => {
	console.log(`Server started at ${host} on port ${port}!`);
    });