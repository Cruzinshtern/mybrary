// if(process.env.NODE_ENV !== "production") {
//     require("dotenv").parse()
// }
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();

const indexRouter = require("./routes/index");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);
app.use(express.static("public"));

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/mybrary",
    { useNewUrlParser: true },
    () => console.log("Connected to DB")
)

app.use("/", indexRouter)


app.listen(process.env.PORT || 3000, () => {
    console.log("Server has been started...")
})
