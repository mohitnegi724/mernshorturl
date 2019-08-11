var express = require("express");
const app = express();
const Keys = require("./config/mongodb");
const cors = require("cors");
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
const path = require("path");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



require("./Routes/Links")(app);
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI || Keys.mongoURI, {
            useNewUrlParser: true
        }, () => {
    console.log("DB Connected");
});
if (process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "client", "build", "index.html"));
    });
}
app.listen(PORT,()=>{
    console.log("App Is Running On Port "+ PORT);
});