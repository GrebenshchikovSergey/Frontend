
import { Pool } from 'pg'
const pool = new Pool({
	connectionString: 'postgres://postgres:1234@db:5432/postgres',
});

export default {
	query: (text, params) => pool.query(text, params),
};
