import Link from 'next/link'
import React from 'react'

export default function Navbar() {
	return (
		<div className="navbar bg-base-300">
			<div className="flex-1">
				<a className="btn btn-ghost normal-case text-xl">daisyUI</a>
			</div>
			<div className="flex-none">
				<ul className="menu menu-horizontal px-1">

				<li>
					<Link href={'home'}>Home</Link>
				</li>
				<li>
					<Link href={'about'}>About</Link>
				</li>


				{/* <li><a>Link</a></li> */}
				<li>
					<details>
					<summary>
						Parent
					</summary>
					<ul className="p-2 bg-base-100">
						<li><a>Link 1</a></li>
						<li><a>Link 2</a></li>
					</ul>
					</details>
				</li>
				</ul>
			</div>
		</div>
	)
}
