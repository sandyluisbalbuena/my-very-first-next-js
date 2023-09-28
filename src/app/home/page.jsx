import React from 'react'
import Users from './users'

export default async function page() {
	const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
	const data = await response.json()
	console.log(data)


	if(false){
		throw new Error('wew')
	}

	return (
		<div className='text-red-100'> 
			<Users users={ data } />
		</div>
	)
}
