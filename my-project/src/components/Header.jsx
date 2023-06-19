import React from "react";
import Link from "next/link";
import classes from "./Header.module.scss";
const Header = () => {
	return (
		<>
			<nav>
				<ul className={classes.list}>
					<li>
						<Link href="/users">Users</Link>
					</li>
					<li>
						<Link href="/contact">Contact</Link>
					</li>
					<li>
						<Link href="/login">Login</Link>
					</li>
					<li>
						<Link href="/profile">Profile</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Header;
