

const client = new Client({
  PGHOST,
  PGPORT,
  PGDATABASE,
  PGUSER,
  PGPASSWORD
});

console.log("Verbinden mit DB!");
client.connect((err) => {
  if (err) { console.error('connection error', err.stack) }
  console.log("Version aus DB auslesen!");
  client.query('select file_no from db_version', (error, results) => {
   if (error) {
      if (error.code == "42P01")
        update(-1);
      else
        console.log(error);
    } else {
      client.end(); 
      update((results.rows.length === 0) ? 0 : results.rows[0].file_no);
    }
  })
}) 

function update(current_file_no) {
  try {
    var files = fs.readdirSync(process.env.SQLSCRIPTS || "model")
    files.forEach(file => {
      const update_no = parseInt(file.substr(0, 5));
      const update_name = file.substr(6).replace(".sql", "");
      console.log(current_file_no + " => " + process.env.SQLSCRIPTS + "/" + file + "(" + update_no + ", " + update_name + ")");
      const sqlcmd = fs.readFileSync(process.env.SQLSCRIPTS + "/" + file, 'utf8');
      execSql(sqlcmd); 
    })
  } catch (err) {
    console.log(err)
  }
}

function execSql(sqlcmd) {
  var data; 
  const client2 = new Client({
    PGHOST,
    PGPORT,
    PGDATABASE,
    PGUSER,
    PGPASSWORD
  });
  console.log("Connect2"); 
  client2.connect((err) => {
    if (err) { console.error('connection error', err.stack) }
    console.log("Abfrage"); 
    client2.query(sqlcmd, (err, res) => {
      if (err) throw err;
      console.log("Empfang"); 
      data = res; 
    })
    console.log("Close"); 
    client2.end();
  }) 
  return data; 
}

