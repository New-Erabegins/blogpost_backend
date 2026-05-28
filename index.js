const express = require('express');
const app = express ();

require(dotenv).config();
const PORT=process.env.PORT||4000;

//loading middleware
app.use(express.json());

//import routes
const blogroutes = require("../routes/blog_routes");

//routing
app.use("/api/v1/",blogroutes);

//connecting database
const dbConnect = require ("./config/database");
dbConnect();

app.listen(PORT,()=>{
  console.log('Serger started successfully')
})
