import dotenv from "dotenv";
import fs from "fs"; 
import pool from "./utils/Pool.js";

dotenv.config();

pool.query('select file_no from db_version', (error, results) => {
  if (error) {
    if (error.code == "42P01")
      update(-1); 
    else 
      console.log(error);
  } else {
    update((results.rows.length === 0) ? 0 : results.rows[0].file_no); 
  }
})

function update(current_file_no) {

  try {
    var files = fs.readdirSync(process.env.SQLSCRIPTS || "model")
    files.forEach(file => {
      console.log(current_file_no + " => " + file)
    })
  } catch (err) {
    console.log(err)
  }
}

