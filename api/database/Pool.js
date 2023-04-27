import pg from "pg";
const {Pool} = pg;
const {PGHOST, PGUSER, PGDATABASE, PGPASSWORD,PGPORT} = process.env;
const pool = new Pool({PGHOST, PGUSER, PGDATABASE, PGPASSWORD,PGPORT});
export default pool;