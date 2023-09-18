import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from './mongodb/config.js';
import { Book } from './mongodb/model.js';
import router from './routes/route.js';
dotenv.config();
// Load environment variables from a .env file
dotenv.config();

const app = express();
const port = 8000;

// Use the cors middleware
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => { res.status(200).send("server started by rtr") });
//get all books
app.use("/books", router);
app.listen(port, () => {
    connectDB(process.env.MONGO_URL);
    console.log(`Server started on port ${port}`);
});
