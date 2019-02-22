const express = require("express");
const helmet = require("helmet");
const server = express()
// const actionRoute = require("./routes/actionRoute");
const projectRoute = require("./routes/projectRoute");

server.use(express.json());
server.use(helmet());
// server.use("/api/actions", actionRoute);
server.use("/api/projects", projectRoute);

const port = process.env.PORT || 5000;
server.listen(port, () => {
    console.log(`\n*** Server Listening on Port ${port} ***\n`)
})