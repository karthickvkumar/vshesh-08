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

const connection = mysql.createConnection({
  host : "db4free.net",
  user : "vcentry",
  password : "test@123",
  database : "travelix",
  port : 3306
});

connection.connect((error) => {
  if(error){
    throw error;
  }
  else{
    console.log("Node js server is connected to Online MySQL server");
  }
});

// URL : http://localhost:5000/api/user-list
// Method : GET
app.get("/api/user-list", (request, response) => {
  const sql_query = "SELECT * FROM kk_table;"

  connection.query(sql_query, (error, result) => {
    if(error){
      response.status(500).send(error);
    }
    else{
      response.status(200).send(result);
    }
  })
})

// URL : http://localhost:5000/api/submit-user
// Method : POST
app.post("/api/submit-user", (request, response) => {
  const sql = `INSERT INTO kk_table (firstname, lastname, age, location) VALUES ('${request.body.firstname}', '${request.body.lastname}', ${parseInt(request.body.age)}, '${request.body.location}');`;

  connection.query(sql, (error, result) => {
    if(error){
      response.status(500).send(error);
    }
    else{
      response.status(200).send("User Account has been created");
    }
  })
})

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log("Node js server is running");
});