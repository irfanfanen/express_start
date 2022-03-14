import express from "express";
import Router from "./route/routes.js";

const app = express();
app.use(Router);
app.listen(3000, () => console.log('Running at :3000'));