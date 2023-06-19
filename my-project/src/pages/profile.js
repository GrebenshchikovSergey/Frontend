import React, { useContext, useEffect } from 'react'
import { AuthContext } from '@/context/AuthContextProvider'
import { LSget } from '@/utils/localStorage'
import PageLayout from '@/components/PageLayout'
const profile = () => {
	const { userInfo, setUserInfo } = useContext(AuthContext)
	console.log(userInfo)
	useEffect(() => {
		(async () => {
			try {
				const response = await fetch("/api/profile", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						'authorization': LSget('myHash')
					},

				});
				const data = await response.json();
				console.log(data);
				setUserInfo(data)
			} catch (err) {
				console.error(err);
				alert("Ошибка");
			}
		})()

	}, [])
	return (
		<PageLayout>
			<div>{userInfo && JSON.stringify(userInfo)}</div>
		</PageLayout>)
}

export default profile