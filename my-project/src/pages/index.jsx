import Link from "next/link";
function Home() {
	return (
		<>
			<h1>Home</h1>
			<nav>
				<ul>
					<li>
						<Link href="/users">Users</Link>
					</li>
					<li>
						<Link href="/contact">Contact</Link>
					</li>
				</ul>
			</nav>
		</>
	);
}

export default Home;
