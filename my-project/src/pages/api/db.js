import { Pool } from 'pg';

const pool = new Pool({
	user: 'postgres',
	host: 'db',
	database: 'postgres',
	password: '1234',
	port: 5432
});

export default async function handler(req, res) {
	try {
		const client = await pool.connect();
		const result = await client.query('SELECT $1::text as message', ['Hello world!']);
		const message = result.rows[0].message;
		res.status(200).json({ message });
	} catch (err) {
		console.error(err);
		res.status(500).json({ message: 'Error' });
	}
}
