const express = require('express');
const logger = require("morgan");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 8080;
app.use(express.urlencoded({
    extended:true
    
}))
app.use(express.json())
app.use(express.static("public"))

app.use(require("./routes/apiRoutes"));
app.use(require("./routes/htmlRoutes"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout")

app.listen(PORT, () => console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT));