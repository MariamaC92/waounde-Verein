import pool from "../database/Pool.js"

export const getContentPage = async (req, res, next) => {
    const {rows} = await pool.query("select * from content_page");
    res.json({rows});
}




