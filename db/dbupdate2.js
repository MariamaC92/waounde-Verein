import dotenv from "dotenv";
import fs from "fs"; 
import pg from "pg";

dotenv.config();
const { PGHOST, PGUSER, PGDATABASE, PGPASSWORD, PGPORT } = process.env;
const { Client } = pg;

const dbconf = { PGHOST, PGPORT, PGDATABASE, PGUSER, PGPASSWORD };
const client = new Client(dbconf);

async function db_version() {
  var temp = -1;
  await client
    .connect()
    .then(() => { console.log('--> DB connected'); })
    .catch((e) => { console.log(e); process.exit(1); }); 

  await client
    .query('select file_no from db_version')
    .then((result) => {
      temp = (result.rows.length === 0) ? 0 : parseInt(result.rows[0].file_no); 
    })
    .catch((e) => { temp = -1; })
    .then(() => client.end()); 

  return temp; 
}

function read_files() {
  try {
    return files = fs.readdirSync(process.env.SQLSCRIPTS || "model")
  } catch (err) {
    console.log(err)
    process.exit(2); 
  }
}

function file_version(filename) {
  return parseInt(filename.substr(0, 5)); 
}

async function run_update(filename,no) {
  const update_client = new Client(dbconf);
  let update_sqlcmd = fs.readFileSync(process.env.SQLSCRIPTS + "/" + filename, 'utf8');
    await update_client
      .connect()
      .then(() => { console.log('--> DB connected'); })
      .catch((e) => { console.log(e); process.exit(1); }); 

  update_sqlcmd = update_sqlcmd + "; update db_version set file_no = " + no; 

  await update_client
    .query(update_sqlcmd)
    .then((result) => {
      console.log("--> Update success")
    })
    .catch((e) => {
      console.log("--> Update error");
      console.log("---------------------------------------------------------------------------------")
      console.log("--> " + e); 
      console.log("---------------------------------------------------------------------------------")
      process.exit(4); 
    })
    .then(() => update_client.end()); 
}

var files = read_files(); 
var current_file_version = file_version(files.at(-1)); 
var current_db_version = await db_version(); 
console.log("Current DB-Version:   " + current_db_version); 
console.log("Current FILE-Version: " + current_file_version); 

for (var update = current_db_version + 1; update <= current_file_version; update++) {
  console.log("update " + update + " of " + current_file_version + ": Apply file " + files[update] + " to database"); 
  await run_update(files[update],update); 
}

console.log("DB Update success !!!"); 