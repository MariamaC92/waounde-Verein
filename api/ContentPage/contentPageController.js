import pool from "../database/Pool.js";

export const getContentPage = async (req, res, next) => {
  const {side} = req.params;
  const { rows } = await pool.query(`select * from content_page('${side}')`);
  res.json({rows});
};
