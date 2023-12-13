import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../../assets/Logo_black.png"
const Navbar = () => {
	return (
		<div className='flex items-center justify-between px-12 py-4'>
			<div className=''>
				<img alt="Logo" src={Logo} className='w-fit' />
			</div>
			<div>
				<ul className='flex gap-4'>
					<li>
						<Link href="/">Home</Link>
					</li>
					<li>
						<Link href="#about">About Us</Link>
					</li>
					<li>
						<Link href="#team">Our Team</Link>
					</li>
					<li>
						<Link href="#services">Services</Link>
					</li>
				</ul>
			</div>
			<div>
				<button className='bg-[#1E1E1E] rounded-full px-4 py-2 text-white'>
					Contact Us
				</button>
			</div>
		</div>
	)
}

export default Navbar