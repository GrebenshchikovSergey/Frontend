// pages/api/users.js
import pool from "../api/db";

export default async function handler(req, res) {
	if (req.method === "POST") {
		try {
			const { first_name, last_name } = req.body;
			await pool.query("INSERT INTO users (first_name, last_name) VALUES ($1, $2)", [first_name, last_name]);
			res.status(201).json({ success: true });
		} catch (err) {
			console.error(err);
			res.status(500).json({ success: false });
		}
	} else {
		res.status(405).json({ message: "Method Not Allowed" });
	}
}
