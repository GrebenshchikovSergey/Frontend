import pool from "./db";

export default async function handler(req, res) {
	if (req.method === "POST") {
		console.log('post')
		const { email, password, hash } = req.body;
		if (hash) {
			try {
				await pool.query("INSERT INTO regusers (email, password, hash) VALUES ($1, $2, $3)", [email, password, hash]);
				res.status(201).json({ success: true });
			} catch (err) {
				console.error(err);
				res.status(500).json({ success: false });
			}
		} else {
			console.log('auth')
			try {
				const result = await pool.query("SELECT * FROM regusers WHERE email = $1 AND password = $2", [email, password]);
				console.log(result.rows[0])
				res.status(201).json(result.rows[0])
			} catch (err) {
				console.error(err);
				res.status(500).json({ success: false });
			}
		}

	} else {
		res.status(405).json({ message: "Method Not Allowed" });
	}
}
