import pool from "./db";

export default async function handler(req, res) {
	if (req.method === "GET") {
		console.log(req.headers)
		try {
			const result = await pool.query("SELECT * FROM regusers ", []);
			res.status(201).json(result.rows[0]);
		} catch (err) {
			console.error(err);
			res.status(500).json({ success: false });
		}
	} else {
		res.status(405).json({ message: "Method Not Allowed" });
	}
}
