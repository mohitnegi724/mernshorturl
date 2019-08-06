var express = require("express");
const app = express();
const cors = require("cors");
const Keys = require("./config/keys");
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



require("./Routes/Links")(app);
mongoose.connect(Keys.mongoURI, { useNewUrlParser: true }, ()=>{
    console.log("DB Connected");
});
const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "client", "build", "index.html"));
    });
}
app.listen(PORT,()=>{
    console.log("App Is Running On Port "+ PORT);
});