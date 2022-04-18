import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import gamesRoute from "./routes/gamesRoutes.js";
import usersRoute from "./routes/usersRoutes.js";
import dotenv from 'dotenv'
import cookieParser from "cookie-parser";

const app = express();

dotenv.config()

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cookieParser());
app.use(cors({
   origin: process.env.HOST,
   credentials: true,
   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
}));

app.use('/', gamesRoute);
app.use('/', usersRoute);

const CONNECTION_URL = process.env.MONGO_CONNECTION
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}`)))
.catch((error) => console.log(error.message));