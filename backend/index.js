const express=require("express");
const database=require("./db")
const userRouter=require("./routes/user.route");
const postRouter=require("./routes/post.route");
const bodyParser = require('body-parser');
const cors=require("cors");
const app=express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('<h1>Cointab SE-ASSIGNMENT</h1><button onclick="getAllUsers()">All Users</button>');
});

app.use("/", userRouter);
app.use("/", postRouter);

app.listen(6500, ()=>{
    database.connect((err) => {
        if (err) {
            console.error("Error connecting to database:", err);
        } else {
            console.log("Connected to the database successfully");
        }
    });
    console.log("Server is running on port 6500");
})