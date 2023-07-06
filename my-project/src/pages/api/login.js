import pool from "./db";

export default async function handler(req, res) {
	if (req.method === "POST") {
		const { email, password, hash } = req.body;
		console.log("hash", email, password, hash)
		if (hash) {
			try {
				try {
					const findResult = await pool.query("SELECT * FROM regusers WHERE email = $1", [email]);
					if (findResult.rows[0]) {
						res.status(402).json('Пользователь уже существует')

					} else {
						const result = await pool.query("INSERT INTO regusers (email, password, hash) VALUES ($1, $2, $3) RETURNING *", [email, password, hash]);
						console.log(result.rows[0])
						res.status(201).json(result.rows[0])
					}
				} catch (e) { }


			} catch (err) {
				console.error(err);
				res.status(500).json({ success: false });
			}
		} else {
			console.log('notHash')
			try {
				const result = await pool.query("SELECT * FROM regusers WHERE email = $1 and password = $2", [email, password]);
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
