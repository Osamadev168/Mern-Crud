import express from "express";
import { Connection } from "./Database/Db.js";
import Router from "./Routes/Routes.js";
import bodyParser from "body-parser";
import cors from "cors";
const App = express();
App.use(cors());
App.use(bodyParser.json()); // for parsing application/json
App.use(bodyParser.urlencoded({ extended: true }));
App.use(express.json());
App.use("/", Router);
const Port = 5000;
Connection();
App.listen(Port, () => {
  console.log("Server is listening on" + Port);
});
