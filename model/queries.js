import pool from "./config.js";

const getProducts = async () => {
  try {
    const sql = {
      text: "Select * from clothes",
    };
    const response = await pool.query(sql);
    return response.rows;
  } catch (error) {
    console.log('Error: ', error.message)
    console.log('el codigo del error es: ', error.code);
  }
};
/* const getProductById = async (id) => {
  try {
    const sql = {
      text: "select * from clothes where id = $1",
      values: [id],
    };
    const respuesta = await pool.query(sql);
    return respuesta.rows;
  } catch (error) {
    console.log(error);
  }
};  */

const getProductById = async (id) => {
  try {
    const resultado = await pool.query(`select * from clothes where id = ${id}`)
    return resultado.rows;
  } catch (error) {
   const { code } = error
    
    console.log('el codigo del error es: ', code);


  }
  
  }


export { getProducts, getProductById };
