const express =require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const pollRoutes = require("./routes/pollRoutes");
const PORT = process.env.PORT || 3000;
const cors = require("cors");
app.use(cors());
const corsOptions = {
    origin: 'http://localhost:4200', // Allow only this origin to access
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed HTTP methods
    credentials: true, // Allow credentials
    optionsSuccessStatus: 204 // Some legacy browsers choke on 204
};

app.use(express.json());
app.use(bodyParser.json());
app.use('/api/polls', pollRoutes);

mongoose.connect("mongodb://localhost:27017/polling",({
})).then(()=>{
    console.log("mongodb connected");
}).catch((e)=>{
    console.log("not connected",e);
})

app.listen(PORT, ()=>{
    console.log(`port is connected${PORT}`);
});