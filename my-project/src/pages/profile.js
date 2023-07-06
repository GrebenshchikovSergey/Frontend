import React, { useContext, useEffect } from 'react'
import { AuthContext } from '@/context/AuthContextProvider'
import { LSdelete, LSget } from '@/utils/localStorage'
import PageLayout from '@/components/PageLayout'
import { useRouter } from 'next/router'
const profile = () => {
	const router = useRouter()
	const { userInfo, setUserInfo } = useContext(AuthContext)
	useEffect(() => {
		const getProfileInfo = async () => {
			console.log('zapros')
			try {
				const response = await fetch("/api/profile", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						'hash': LSget('myHash')
					},

				});
				const data = await response.json();
				console.log('data', data)
				setUserInfo(data)
			} catch (err) {
				console.error(err);
				alert("Ошибка");
			}
		}
		if (LSget('myHash') && !userInfo) {
			getProfileInfo()
		}
	}, [])
	const logout = () => {
		LSdelete('myHash')
		setUserInfo(null)
		router.push('/')
	}
	return (
		<PageLayout>
			<div>{userInfo && JSON.stringify(userInfo)}
				<div>
					{<button className='btn btn-primary' onClick={logout}>Выйти</button>}
				</div>
			</div>
		</PageLayout>)
}

export default profile;
