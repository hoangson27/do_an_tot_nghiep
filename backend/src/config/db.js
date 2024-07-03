import { createPool } from 'mysql2';

const pool = createPool({
    host: 'localhost',
    user: 'yourusername',
    password: 'yourpassword',
    database: 'yourdatabase',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export default pool.promise();
