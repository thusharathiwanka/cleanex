const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

mongoose
	.connect(process.env.CONNECTION_URL, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
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
app.use("/packages", require("./api/routes/package.routes"));
app.use("/users", require("./api/routes/common.routes"));
app.use("/blog", require("./api/routes/blog.routes"));
app.use("/payment", require("./api/routes/payment.routes"));
app.use("/order", require("./api/routes/order.routes"));

app.get("/", (req, res) => {
	res.send("<h3>CLEANEX API 2021</h3>");
});
