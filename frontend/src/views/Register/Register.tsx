import { useState } from "react";
import { FormInput } from "../../components/FormInput"
import { Gender } from "../../utils/Constants"

const Register = () => {
	const [formStage, setFormStage] = useState<number>(1);

	return (
		<div className="flex h-[100svh]">
			<div className="bg-register bg-cover bg-center flex flex-col flex-[0.3] px-16 py-20 h-full">
				<img src="./logo.png" alt="logo" className="w-fit" />
				<div className="mt-auto text-white">
					<h2 className="text-xl font-semibold pb-2">Start your journey with us.</h2>
					<p>Discover simple methods to attend to your patients and provide the best healthcare for them.</p>
				</div>
			</div>
			<div className="flex-[0.7] p-20 flex flex-col gap-8">
				<div>
					<h1 className="text-[#EA6011] text-3xl ">Create  a New Account</h1>
					<p>Provide information that would be used to register you and your firm</p>
				</div>
				<div className="flex flex-col gap-y-6">
				{
					formStage === 1 ? <Form1 setFormStage={setFormStage} /> : <Form2 />
				}

				</div>
			
			</div>
		</div>
	)
}

export default Register

interface Form1Props {
	setFormStage: React.Dispatch<React.SetStateAction<number>>
}
const Form1 = ({setFormStage}: Form1Props) => {
	return (
		<>
			<div className="flex gap-4">
				<FormInput name="first-name" placeholder="First Name" required={true} autoComplete="false" label="First Name" type="text" id="first-name" onChange={() => { return null }} />
				<FormInput name="last-name" placeholder="Last Name" required={true} autoComplete="false" label="Last Name" type="text" id="last-name" onChange={() => { return null }} />
			</div>
			<FormInput name="phone-number" placeholder="+234" required={false} autoComplete="false" label="Phone Number" type="text" id="phone-number" onChange={() => { return null }} />
			<div className="flex gap-4">
				<FormInput
					select={true}
					options={Gender}
					label="Gender"
					name="gender"
					id="gender"
					type="text"
					placeholder="Gender"
					autoComplete={"false"}
					required={true}
					onChange={(selectedOption) => {
						return null;
					}}
				/>
				<FormInput name="personal_address" placeholder="no 15, jakonde street" required={true} autoComplete="false" label="Personal Address" type="personal_address" id="personal_address" onChange={() => { return null }} />
			</div>
			<FormInput name="email" placeholder="Email" required={true} autoComplete="false" label="Email" type="email" id="email" onChange={() => { return null }} />
			<button className="w-full py-2 text-white bg-[#EA6011]" onClick={() => setFormStage(2)}>
				Continue
			</button>
			<div className="flex w-full justify-center">
				<p>Already have an account? <a href="/login" className="text-[#EA6011]">Login</a></p>
			</div>
		</>
	)
}

const Form2 = () => {
	return (
		<>
			<div className="flex gap-4">
				<FormInput name="clinic-name" placeholder="Clinical Name" required={true} autoComplete="false" label="First Name" type="text" id="first-name" onChange={() => { return null }} />
				<FormInput name="number" placeholder="Phone number" required={true} autoComplete="false" label="Last Name" type="text" id="last-name" onChange={() => { return null }} />
			</div>
			<FormInput name="address" placeholder="plot 16, jakonde close" required={false} autoComplete="false" label="Clinical Address" type="text" id="address" onChange={() => { return null }} />
			<FormInput
				label="Password"
				name="password"
				id="password"
				type="password"
				password={true}
				placeholder="8+ Strong characters"
				additionalClasses="text-black rounded-md border border-[#263238] bg-transparent px-4 py-2 font-light  outline-none placeholder-[#263238] md:placeholder-white"
				autoComplete="off"
				required={false}
				onChange={(e) => {
					return null;
				}}
			/>
			<FormInput
				label="Confirm Password"
				name="password"
				id="password"
				type="password"
				password={true}
				placeholder="8+ Strong characters"
				additionalClasses="text-black rounded-md border border-[#263238] bg-transparent px-4 py-2 font-light  outline-none placeholder-[#263238] md:placeholder-white"
				autoComplete="off"
				required={false}
				onChange={(e) => {
					return null;
				}}
			/>
			<button className="w-full py-2 text-white bg-[#EA6011]">
				Create Account
			</button>
			<div className="flex w-full justify-center">
				<p>Already have an account? <a href="/login" className="text-[#EA6011]">Login</a></p>
			</div>
		</>
	)
}