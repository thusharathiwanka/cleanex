const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

mongoose
	.connect(process.env.CONNECTION_URL, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: true,
	})
	.then(() => {
		app.listen(PORT, () => {
			console.log(`connected to mongodb and started listening on port ${PORT}`);
		});
	})
	.catch((err) => {
		console.error(err.message);
	});

app.use("/customers", require("./api/routes/customer.routes"));
app.use("/moderators", require("./api/routes/moderator.routes"));
app.use("/users", require("./api/routes/common.routes"));

app.get("/", (req, res) => {
	res.send("<h3>CLEANEX API 2021</h3>");
});
