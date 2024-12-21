const { Pool } = require('pg');
require('dotenv').config();
module.exports = new Pool (
    {
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USER,
        database: process.env.DATABASE_DB,
        password: process.env.DATABASE_PW,
        port: process.env.DATABASE_PORT,
    }
)