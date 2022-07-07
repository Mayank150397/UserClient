import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/mySigninSignUpDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log(" DB Connected")
})

constuserSchema = mongoose.Schema({
    name: String,
    password: String,
    email: String
})

const User = new mongoose.model("User", userSchema)

app.get("/login", (req, res) => {
    res.send("My API Login")
})

app.post("/login", (req, res) => {
    res.send("My API Login")
})
app.get("/register", (req, res) => {
    res.send("My API Register")
})

app.post("/login", (req, res) => {
    res.send("My API Register")
})

app.listen(9002, () => {
    console.log("Start")
})