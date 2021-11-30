var express = require("express");
var app = express();
var cors = require('cors')
var bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

require("./server/config/mongoose.js");
require("./server/routes/tasksRouter.js")(app);

app.listen(8080, function(){
    console.log("Listening on port: 8080");
})

