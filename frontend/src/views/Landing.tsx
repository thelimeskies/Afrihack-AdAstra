import { LuHome } from "react-icons/lu";
import Navbar from "../components/Dashboard/Landing/Navbar";
import DoctorImage from "../assets/doctor.png"
import { FormInput } from "../components/FormInput";
import { Gender } from "../utils/Constants";
import { FaHospital } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import HomeList from "../components/Dashboard/Landing/HomeList";
import Footer from "../components/Dashboard/Landing/Footer";
import imageHeart from "../assets/image_heart.png"
import Hands from "../assets/hands.png"

const HomePage = () => {
	return (
		<>
			<Navbar />
			<div className="px-20 py-20 flex flex-col gap-y-12">
				<div className="flex ">
					<div className="w-[60%] flex flex-col gap-y-6">
						<span className="flex gap-2 items-center w-fit bg-[#F1F5F9] px-4 py-2 rounded-full">
							<LuHome />
							<p>What we plan to achieve</p>
						</span>
						<h1 className="text-4xl">Creating a Decentralized Health Records System and Incoporating Access Control with Role-Based Permissions</h1>
						<div className="flex gap-4">
							<button className="rounded-full text-white bg-[#1E1E1E] py-2 px-4">
								Get Started
							</button>
							<button className="rounded-full border  text-[#1E1E1E] px-4 py-2">
								Learn More
							</button>
						</div>
					</div>
					<div className="w-[40%]">
						<img src={DoctorImage} alt="doctors_image" />
					</div>

				</div>
				{/* book appointment  */}
				<div className="flex gap-4 mx-8 items-center bg-[#F8FAFC] py-4 px-4 rounded-md">
					<FormInput
						name="gender"
						id="gender"
						type="text"
						placeholder="Enter your name"
						autoComplete={"false"}
						required={true}
						onChange={(selectedOption) => {
							return null;
						}}
					/>
					<FormInput
						select={true}
						options={Gender}
						name="gender"
						id="gender"
						type="text"
						placeholder="Select your location"
						autoComplete={"false"}
						required={true}
						onChange={(selectedOption) => {
							return null;
						}}
					/>
					<FormInput
						select={true}
						options={Gender}
						name="gender"
						id="gender"
						type="text"
						placeholder="Select your gender"
						autoComplete={"false"}
						required={true}
						onChange={(selectedOption) => {
							return null;
						}}
					/>
					<button className="h-fit w-fit text-white whitespace-nowrap px-4 py-2 bg-[#1C3530]">
						Book now
					</button>
				</div>

				{/* what we do  */}
				<div className="flex gap-x-24 bg-[#F8FAFC] p-6 rounded-md">
					<div className="flex flex-col gap-y-4 flex-[0.6]">
						<span className="flex w-fit  gap-2 bg-[#F1F5F9] px-4 py-2 rounded-full items-center">
							<FaHospital />
							<p>What we do?</p>
						</span>
						<h1 className="text-2xl">Offering a Variety of Services to Boost the Health Sector</h1>
						<p>
							Whether you are a medical practitioner or a patient, AdAstra has something in stall for you
						</p>
						<div className="rounded-md bg-[#1C3530] text-white p-6">
							<h1 className="pb-2 uppercase ">Categories</h1>
							<ul className="flex flex-col divide-y gap-y-4 mt-4 ">
								<li>Decentralized Health Records</li>
								<li className="pt-4">Medical Assistive AI</li>
								<li className="pt-4">Medical Assistive Robots</li>
							</ul>
						</div>
					</div>
					<div className="p-8 flex flex-col gap-y-4 bg-[#E2EAE9] rounded-lg w-full flex-[0.4]">
						<img src={imageHeart} className="rounded-md" alt="" />
						<h1 className="font-semibold text-2xl">Decentralised Health Records</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
							accusamus aliquam aut. Laboriosam, 
						</p>
						<button className="text-white bg-[#1E1E1E] w-fit rounded-full py-2 px-4 ml-auto">
							Learn More
						</button>
					</div>
				</div>

				{/* Our records  */}
				<div className="flex flex-col gap-y-4 bg-[#F8FAFC] p-6 rounded-md">
					<div className="flex flex-col gap-y-4">
						<span className="flex w-fit  gap-2 bg-[#F1F5F9] px-4 py-2 rounded-full items-center">
							<LuHome />
							<p>Our Records</p>
						</span>
						<h1 className="text-2xl">Recent Breakthroughs</h1>
						<p>
							Whether you are a medical practitioner or a patient, AdAstra has something in stall for you
						</p>
					</div>
					<div className="flex justify-between">
						<div className="flex flex-col gap-y-4 max-w-[550px]">
							<HomeList />
							<HomeList />
							<HomeList />
							<HomeList />
						</div>
						<img src={Hands} className="rounded-md bg-contain" alt="" />

					</div>
				</div>

				{/* Contact us  */}
				<div className="flex gap-x-4 bg-[#F8FAFC] py-12 px-6 rounded-xl justify-between">
					<div className="flex flex-col gap-y-2 ">
						<h1 className="text-2xl font-semibold">Contact Us</h1>
						<p>Be the first to know when a new update on the platform has been made</p>
					</div>
					<div className="flex gap-2 h-full my-auto items-center">
						<FormInput required={false} autoComplete="false" onChange={() => { return null }} id="" type="text" placeholder="example@gmail.com" name="" label="" />
						<button className="bg-[#595959] py-2 px-3 rounded-md text-xl text-white">
							<IoIosArrowForward />
						</button>
					</div>
				</div>

			</div>
			<Footer/>

		</>
	)
}

export default HomePage;