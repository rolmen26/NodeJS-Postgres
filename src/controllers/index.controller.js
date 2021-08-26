const { Pool } = require('pg')

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '1234',
    database: 'tienda',
    port: '5432'
});


const crearCliente = async (req, res) => {
    const { cedula, nombre, apellido } = req.body;
    const response = await pool.query('INSERT INTO cliente (Cedula, Nombre, Apellido) VALUES ($1, $2, $3)', [cedula, nombre, apellido]);
    res.json({
        message: 'Cliente creado',
        body: {
            cliente: { cedula, nombre, apellido }
        }
    })
}


module.exports = {
    crearCliente
}