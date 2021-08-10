const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.send("<h1>CLEANEX API 2021</h1>");
});

mongoose
	.connect(process.env.CONNECTION_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		app.listen(PORT, () => {
			console.log(`connected to mongodb and started listening on port ${PORT}`);
		});
	})
	.catch((err) => {
		console.log(err.message);
	});
