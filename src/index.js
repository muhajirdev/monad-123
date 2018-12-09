const express = require("express");
const hello = require("./hello");
const handleListen = require("./handleListen");
const PORT = 3000;
const app = express();
app.get("/", hello);
app.listen(PORT, handleListen(console.log, PORT));
