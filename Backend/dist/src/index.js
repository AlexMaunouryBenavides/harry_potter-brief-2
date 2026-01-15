import express from "express";
const app = express();
const PORT = "4000";
app.get("/", (req, res) => {
    res.status(200).send("Hello World");
});
app.listen(PORT, () => {
    console.log("Server running at PORT: ", PORT);
}).on("error", (error) => {
    throw new Error(error.message);
});
//# sourceMappingURL=index.js.map