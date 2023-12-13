import { BsArrowLeft } from "react-icons/bs";
import { FormInput } from "../../FormInput";

const PatientDetails = () => {
	return (
		<div className="flex flex-col gap-y-6">
			<div className="flex ">
				<div className="flex items-center gap-2 justify-start">
					<BsArrowLeft />
					Go back
				</div>
			</div>
			<div>
				<div className="px-4 py-2 bg-[#F8FAFC]">
					<h1 className="w-full text-[#0C0C0C] ">Patient Information</h1>
				</div>
				<div className="grid grid-cols-3 grid-rows-3">
					<FormInput label="First Name" type="text" name="" id="" placeholder="" required={false} autoComplete="" onChange={() => { return null }} />
					<FormInput label="Last Name" type="text" name="" id="" placeholder="" required={false} autoComplete="" onChange={() => { return null }} />
					<FormInput label="Age" type="text" name="" id="" placeholder="" required={false} autoComplete="" onChange={() => { return null }} />
					<FormInput label="Gender" type="text" name="" id="" placeholder="" required={false} autoComplete="" onChange={() => { return null }} />
					<FormInput label="Contact Details" type="text" name="" id="" placeholder="" required={false} autoComplete="" onChange={() => { return null }} />
					<FormInput label="Email" type="text" name="" id="" placeholder="" required={false} autoComplete="" onChange={() => { return null }} />
					<FormInput label="Additional information" textarea={true} rows={5} cols={5} type="text" name="" id="" placeholder="" required={false} autoComplete="" onChange={() => { return null }} />
				</div>
			</div>
			<div>
				<div className="px-4 py-2 bg-[#F8FAFC]">
					<h1 className="w-full text-[#0C0C0C] ">Test Data</h1>
				</div>
				<div className="grid grid-cols-3 grid-rows-3">
					<FormInput label="Temperature" type="text" name="" id="" placeholder="" required={false} autoComplete="" onChange={() => { return null }} />
					<FormInput label="Blood Pressure" type="text" name="" id="" placeholder="" required={false} autoComplete="" onChange={() => { return null }} />
					<FormInput label="Oxygen Saturation" type="text" name="" id="" placeholder="" required={false} autoComplete="" onChange={() => { return null }} />
					<FormInput label="Height" type="text" name="" id="" placeholder="" required={false} autoComplete="" onChange={() => { return null }} />
					<FormInput label="Weight" type="text" name="" id="" placeholder="" required={false} autoComplete="" onChange={() => { return null }} />
					<FormInput label="Pulse Rate" type="text" name="" id="" placeholder="" required={false} autoComplete="" onChange={() => { return null }} />
					<FormInput label="BMI" type="text" name="" id="" placeholder="" required={false} autoComplete="" onChange={() => { return null }} />
					<FormInput label="Respiratory Rate" type="text" name="" id="" placeholder="" required={false} autoComplete="" onChange={() => { return null }} />
				</div>
			</div>
		</div>
	)
}

export default PatientDetails;