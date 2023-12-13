import React from 'react'
import { FaStethoscope } from "react-icons/fa6";

interface InfoCardProps  {
	title: string;
	count: number;
}
const InfoCard = ({title, count}: InfoCardProps) => {
  return (
	<div className='p-4 flex rounded-md shadow-sm w-full gap-4'>
		<span className='rounded-full p-2 w-8 h-8  bg-[#E2E8F0]'>
			<FaStethoscope/>
		</span>
		<div className='flex flex-col gap-y-2'>
			<p className='italic text-[#475569]'>{title}</p>
			<h1 className='text-4xl font-bold'>{count}</h1>
		</div>
	</div>
  )
}

export default InfoCard