const pool = require("./pool");

const queryGato = `SELECT alimentos.name, alimentos.stock, accesorios.name,
    accesorios.stock, juguetes.name, juguetes.stock 
    FROM alimentos FULL JOIN accesorios ON alimentos.name
    = accesorios.name FULL JOIN juguetes ON
    juguetes.name = accesorios.name WHERE alimentos.animal
    = 'gato' OR accesorios.animal LIKE '%gato%'
    OR juguetes.animal LIKE '%gato%';`;

const queryGatoAlimento = `SELECT name, stock, "image-url" FROM alimentos WHERE animal = 'gato';`

const queryGatoAccesorio = `SELECT name, stock FROM accesorios WHERE
    animal LIKE '%gato%';`;

const queryGatoJuguete = `SELECT name, stock FROM juguetes WHERE animal LIKE '%gato%';`;

const queryPerroAccesorio = `SELECT name, stock FROM accesorios WHERE
    animal LIKE '%perro%';`;

const queryPerroJuguete = `SELECT name, stock FROM juguetes WHERE animal LIKE '%perro%';`;
    
const queryPerroAlimento = `SELECT name, stock FROM alimentos WHERE animal = 'perro';`

async function getAllAlimentos()  {
    const {rows} = await pool.query("SELECT * FROM alimentos ORDER BY name;");
    return rows;
}

async function getAllGato() {
      //This obviously has to be optimized but for now it works
    const alimentoRows = await pool.query(queryGatoAlimento);
    const accesorioRows = await pool.query(queryGatoAccesorio);
    const jugueteRows = await pool.query(queryGatoJuguete);
    return {alimentos: alimentoRows.rows, accesorios: accesorioRows.rows, juguetes: jugueteRows.rows};
}

async function getAllPerro() {
    const alimentoRows = await pool.query(queryPerroAlimento);
    const accesorioRows = await pool.query(queryPerroAccesorio);
    const jugueteRows = await pool.query(queryPerroJuguete);
    return {alimentos: alimentoRows.rows, accesorios: accesorioRows.rows, juguetes: jugueteRows.rows};
}

async function getAllAccesorios() {
    const {rows} = await pool.query(`SELECT *  FROM accesorios WHERE imgsrc IS NOT NULL ORDER BY NAME;`);
    return rows; 
}

async function getAllJuguetes() {
    const {rows} = await pool.query(`SELECT * FROM juguetes WHERE imgsrc IS NOT NULL ORDER BY NAME;`);
    return rows;
}

async function getFeatured(){
    const {rows} = await pool.query(`SELECT * from alimentos WHERE featured = true`);
    return rows;
}

module.exports = {
    getAllAlimentos,
    getAllGato,
    getAllPerro,
    getAllAccesorios,
    getAllJuguetes,
    getFeatured
}