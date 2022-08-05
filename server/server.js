const express = require("express");

const cors = require("cors");

const dbConfig = require('./config/database.js');

const employee = require("./routes/employeeRoute.js")

const dotenv = require("dotenv");

dotenv.config();


const app = express();

// const db_URL = process.env.MongoDB_URL;

// const PORT = process.env.PORT || 5000;
const PORT = process.env.PORT ;

dbConfig();

app.use(cors({ origin: true, credentials: true }));

app.use(express.json({extended: false}));

app.get('/', (req, res) => res.send('Server is running') );

app.use("/api", employee);


app.listen(PORT, ()  => 
    console.log(`server is running on http://localhost:${PORT}`)
);