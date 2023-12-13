import React, { useState } from 'react'
import { BsGear, BsHospital, BsPeople, BsRobot, BsSpeedometer } from 'react-icons/bs'
import { LuUsers } from "react-icons/lu"
import { FormInput } from '../../FormInput';
import { SidebarItem } from './SidebarItem';

const Sidebar = () => {
	const [userType, setUserType] = useState("admin");
	return (
		<div className='bg-[#000C0A] min-h-[100svh] w-[286px] px-4 py-8 flex flex-col'>
			<img src="./logo.png" alt="" className="w-fit" />
			<div className='mt-8'>
				{userType === "nurse" ? (<div>

					<FormInput id="search" autoComplete='' onChange={() => { return null }} required={false} name="search" placeholder='Search' type="text" />
				</div>) : null
				}
				{
					userType === "admin" ? (
						<div className="flex flex-col gap-y-4">
							<div className='flex flex-col gap-4'>
								<SidebarItem icon={<BsSpeedometer />} title="Overview" />
								<SidebarItem icon={<BsHospital />} title="Doctors" />
								<SidebarItem icon={<LuUsers />} title="Patients" />
								<SidebarItem icon={<BsPeople />} title="Staffs" />
							</div>
							<div className='flex flex-col gap-4 border-t border-t-white pt-4'>
								<SidebarItem icon={<BsGear />} title="Settings" />
								<SidebarItem icon={<BsGear />} title="Help and Support" />
							</div>
						</div>
					) : null}
				<div>

				</div>
			</div>



			<div className='mt-auto'>
				<div className='text-white items-center flex gap-2'>
					<BsRobot /><p>How to use AI?</p>
				</div>
			</div>
		</div>
	);
}

export default Sidebar