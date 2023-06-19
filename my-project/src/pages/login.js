import AuthForm from '@/components/AuthForm'
import PageLayout from '@/components/PageLayout'
import React from 'react'

const login = () => {
	return (
		<PageLayout>
			<div><AuthForm /></div>
		</PageLayout>
	)
}

export default login