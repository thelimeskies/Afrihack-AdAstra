import { useState } from "react";
import InfoCard from "../../components/Dashboard/Home/InfoCard";
import DoctorTable from "../../components/Dashboard/Home/Tables/Doctors";
import NursesTable from "../../components/Dashboard/Home/Tables/Nurses";

const Home = () => {
	const [active, setActive] = useState("doctors");
	return (
		<div className="flex flex-col gap-y-8">
			<div className="bg-[#F1F5F9] gap-y-4 flex flex-col rounded-md py-8 px-8">
				<p className="text-[14px] italic">Welcome back,</p>
				<h1 className="font-bold">Scott Eyawo</h1>
				<p className="text-[14px] italic">Pick up from where you started</p>
			</div>
			<div className="flex justify-between gap-8 ">
				<InfoCard title="Total Doctors" count={20}/>
				<InfoCard title="Total Patients" count={20}/>
				<InfoCard title="Total Staff" count={20}/>
			</div>
			<div className="rounded-md p-8 shadow-sm">
				<div className="flex justify-between items-center">
					<div className="flex gap-4 border-b">
						<p onClick={() => setActive("doctors")} className="border-b border-b-[#061F6A] pb-4">Doctors Table</p>
						<p onClick={() => setActive("nurses")} className="border-b border-b-[#061F6A] pb-4">Nurse Table</p>
						<p onClick={() => setActive("medical")} className="border-b border-b-[#061F6A] pb-4">Medical Lab Table</p>
					</div>
						<button>View all</button>	
				</div>
				<div className="mt-8 w-full">
					{
						<>
							{
								active === "doctors" && <DoctorTable/>
							}
							{
								active === "nurses" && <NursesTable/>
							}
							{
								active === "medical" && <DoctorTable/>
							}
						</>
						
					}
					{/* <DoctorTable/> */}

				</div>
			</div>
		</div>
	)
}

export default Home;