import React, { useContext } from "react";
import Link from "next/link";
import classes from "./Header.module.scss";
import { AuthContext } from "@/context/AuthContextProvider";
const Header = () => {
	const { userInfo } = useContext(AuthContext);
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
					{!userInfo ? (
						<li>
							<Link href="/login">Login</Link>
						</li>
					) : (
						<li>
							<Link href="/profile">Profile</Link>
						</li>
					)}
				</ul>
			</nav>
		</>
	);
};

export default Header;
