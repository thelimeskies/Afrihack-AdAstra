import InfoCard from "../../components/Dashboard/Home/InfoCard";
import DoctorTable from "../../components/Dashboard/Home/Tables/Doctors";

const Home = () => {
	return (
		<div className="flex flex-col gap-y-8">
			<div className="bg-[#F1F5F9] rounded-md py-8 px-8">
				<p>Welcome back</p>
				<h1 className="font-bold">Scott Eyawo</h1>
				<p>Pick up from where you started</p>
			</div>
			<div className="flex justify-between gap-8 ">
				<InfoCard/>
				<InfoCard/>
				<InfoCard/>
			</div>
			<div className="rounded-md p-8 shadow-sm">
				<div className="flex justify-between items-center">
					<div className="flex gap-4 border-b">
						<p>Doctors Table</p>
						<p>Nurse Table</p>
						<p className="border-b border-b-[#061F6A]">Medical Lab Table</p>
					</div>
	
						<button>View all</button>
					
				</div>
				<div className="mt-8 w-full">
					<DoctorTable/>

				</div>
			</div>
		</div>
	)
}

export default Home;