import express from "express";
import mysql from "mysql";
import cors from "cors";
import http from "http";

const app = express();
const server = http.createServer(app);

app.use(cors({
  credentials : true,
  origin : "*"
}));

app.use(express.json());


const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log("Node js server is running");
});