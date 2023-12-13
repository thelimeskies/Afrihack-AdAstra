import { BsChevronBarDown } from "react-icons/bs"

const Topbar = () => {
	return (
		<div className="w-full flex justify-between">
			<div>
				<p>Hello</p>
			</div>
			<div className="flex items-center">
				<span className="w-6 h-6 rounded-full bg-blue-950">

				</span>
				<div className="flex flex-col">
					<p>
						Scott Eyawo (Nurse)
					</p>
					<p>Scott.Eyawo@hospital.com</p>
				</div>
				<button>
					<BsChevronBarDown />
				</button>

			</div>
		</div>
	)
}

export default Topbar