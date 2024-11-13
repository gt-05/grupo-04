const connection = require('../src/database/connection');

/**
 * QUASE NUNCA USAMOS, APENAS EM ULTIMO CASO
 */

async function execute() {
    let products = await connection.query("SELECT * FROM product WHERE name like 'N%'", {type: "SELECT"});
    console.log(products);
}

execute();

