import React from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

const HomeList = () => {
  return (
	<div className='flex items-center gap-3'>
		<p className='text-xl'>01</p>
		<p className='text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam 
			
		</p>
		<button className='rounded-full border p-2 hover:bg-[#1E1E1E] hover:text-white'>
			<BsArrowRight/>
		</button>
	</div>
  )
}

export default HomeList