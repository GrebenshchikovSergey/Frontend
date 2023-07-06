import { useState, } from "react";
import pool from "./api/db";
import { useRouter } from "next/router";
import PageLayout from "@/components/PageLayout";
export default function Users({ users }) {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const router = useRouter();
	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const response = await fetch("/api/users", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ first_name: firstName, last_name: lastName }),
			});
			if (response.ok) {
				setFirstName("");
				setLastName("");
				alert("User has been added successfully!");
				router.replace(router.asPath)
			}
		} catch (err) {
			console.error(err);
			alert("Failed to add user!");
		}
	};

	return (
		<PageLayout>
			<div>
				<h1>Users</h1>
				<ul>
					{users.map((user) => (
						<li key={user.id}>
							{user.first_name} {user.last_name}
						</li>
					))}
				</ul>
				<form onSubmit={handleSubmit}>
					<label>
						First Name:
						<input type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
					</label>
					<br />
					<label>
						Last Name:
						<input type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} />
					</label>
					<br />
					<button type="submit">Add User</button>
				</form>
			</div>
		</PageLayout>
	);
}

export async function getServerSideProps(context) {
	const res = await pool.query("SELECT * FROM users");
	const users = res.rows;
	return {
		props: { users },
	};
}
