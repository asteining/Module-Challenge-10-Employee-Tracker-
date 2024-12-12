import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

console.log('DB_PASSWORD:', process.env.DB_PASSWORD);

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
});

export default pool;
