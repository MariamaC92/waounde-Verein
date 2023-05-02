import pool from "../database/Pool.js";

export const getContentPage = async (req, res, next) => {
  const { rows } = await pool.query("select * from content_page");
  
  const headline = rows.map((item) => {
    console.log(item);
    return({
      headcription: item.headline_description,
      deepness: item.deepness,
    });
  });
  console.log(headline);


  // Lukas alleine programmiert. Ergibt das Sinn ?
/*   const textcontent = rows.map((item)=> {
    console.log(item);
    return({
        textcontent: item.topic
    });
  });
  console.log(textcontent);*/
  res.json({headline});
};
