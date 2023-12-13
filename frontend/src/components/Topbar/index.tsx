import { BsChevronDown } from "react-icons/bs"

const Topbar = () => {
	return (
		<div className="w-full flex justify-between">
			<div>
				<p>Hello</p>
			</div>
			<div className="flex items-center gap-2">
				<span className="w-[49px] h-[49px] rounded-full bg-blue-950">

				</span>
				<div className="flex flex-col">
					<p className="text-[14px]">
						Scott Eyawo (Nurse)
					</p>
					<p className="text-[12px]">Scott.Eyawo@hospital.com</p>
				</div>
				<button className="font-bold">
					<BsChevronDown/>
				</button>

			</div>
		</div>
	)
}

export default Topbar