import express from "express";
import routes from "./routes/routes.js";
import cors from 'cors';

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api', routes);

const PORT = "4000";

app.get("/", (req, res) => {
res.status(200).send("Hello World");
});

app.listen(PORT, () => {
console.log("Server running at PORT: ", PORT);
}).on("error", (error) => {

throw new Error(error.message);
});