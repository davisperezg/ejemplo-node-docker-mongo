import express from "express";
import testRoutes from "./routes/test.routes.js";
import "./database.js";

const app = express();

const port = 3000;

app.use(testRoutes);
app.listen(port);

console.log(`Server on port ${port}`);
