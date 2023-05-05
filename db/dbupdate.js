import dotenv from "dotenv";
import fs from "fs"; 
import pool from "./utils/Pool.js";

dotenv.config();

try {
  const files = fs.readdirSync(process.env.SQLSCRIPTS || "model")
  files.forEach(file => {
    console.log(file)
  })
} catch (err) {
  console.log(err)
}

var file_no = -1; 

pool.query('select file_no from db_version', (error, results) => {
  if (error) {
    console.log(error);
  } else {
    console.log(results.rows); 
    file_no = (results.rows.length === 0) ? 0 : results.rows[0].file_no; 
  }
})

console.log(file_no); 
