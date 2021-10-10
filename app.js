const express = require("express");
const morgan = require("morgan");
const path = require("path");

const globalRouter = require("./routers/globalRouter");
const deptRouter = require("./routers/deptRouter");
const empRouter = require("./routers/empRouter");

const PORT = 4000;
const app = express();


app.set("view engine","pug");
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/assets", express.static(path.join(__dirname, "/assets")));

app.use("/", globalRouter);
app.use("/emp", empRouter);
app.use("/dept", deptRouter);

app.listen(PORT, () => {
    console.log(`${PORT} WAB SERVER START!`);
});