import pool from "./config.js";

const getProducts = async () => {
  try {
    const sql = {
      text: "Select * from clothes",
    };
    const response = await pool.query(sql);
    return response.rows;
  } catch (error) {
    console.log(error);
  }
};

export {
    getProducts
}
