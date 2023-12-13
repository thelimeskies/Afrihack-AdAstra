import React from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

const HomeList = () => {
	return (
		<div className='flex items-center gap-4'>
			<p className='text-xl self-start font-bold'>01</p>
			<div className='flex flex-col gap-2'>
				<p className="text-xl">
					Lorem, ipsum dolor sit amet 
					consectetur adipisicing elit. Nam
				</p>
				<p className='text-[#595959]'>Lorem Ipsum</p>
			</div>

			<button className='rounded-full border p-2 hover:bg-[#1E1E1E] hover:text-white'>
				<BsArrowRight />
			</button>
		</div>
	)
}

export default HomeList