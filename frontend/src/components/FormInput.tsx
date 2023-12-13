import React, { useState } from "react";
import Select from "react-select"
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";
import { FormInputProps } from "../types/components/FormInput";


export const FormInput = ({
	label,
	labelStyles,
	value,
	name,
	id,
	type,
	additionalClasses,
	placeholder,
	placeholderStyleOptions,
	onChange,
	additionalAttributes,
	select,
	selectStyleOptions,
	textarea,
	password,
	pattern,
	rows,
	cols,
	disabled,
	required,
	minLength,
	maxLength,
	autoComplete,
	options,
	inputMode,
}: FormInputProps) => {
	const [visible, setVisible] = useState<boolean>(false);

	return (
		<div className="flex w-full flex-col justify-center gap-y-1">
			<label
				className={` text-left font-semibold capitalize text-blue-950 ${labelStyles}`}
			>
				{label}
			</label>
			{!select && !textarea && (
				<div className="relative">
					<input
						name={name}
						id={id}
						value={value}
						className={`${
							additionalClasses
								? additionalClasses + " w-full"
								: "h-10 w-full rounded-md border border-[#001746] bg-transparent px-4 py-2 text-[15px] font-light  outline-none md:placeholder-white md:placeholder-opacity-50 "
						}`}
						type={!visible ? type : "text"}
						required={required}
						minLength={minLength}
						maxLength={maxLength} // Add the maxLength attribute here
						autoComplete={autoComplete}
						pattern={pattern}
						placeholder={placeholder}
						disabled={disabled}
						onChange={onChange}
						inputMode={inputMode ? inputMode : "text"}
						{...additionalAttributes}
					/>
					{password && (
						<i className="absolute right-4 top-1/2 flex -translate-y-1/2 items-center text-[#002060]">
							<button
								type="button"
								onClick={() => setVisible(!visible)}
								aria-label={
									visible ? "Hide password" : "Show password"
								}
							>
								<span className="sr-only">
									{visible
										? "Hide password"
										: "Show password"}
								</span>
								{visible ? <BsEyeSlashFill /> : <BsEyeFill />}
							</button>
						</i>
					)}
				</div>
			)}
			{select && (
				<Select
					name={name}
					id={id}
					options={options}
					placeholder={placeholder}
					styles={customSelectStyles(
						selectStyleOptions,
						placeholderStyleOptions
					)}
					defaultInputValue={value}
					value={options?.find((option) => option.value === value)}
					// theme={(theme) => ({
					// 	...theme,
					// 	colors: {
					// 		...theme.colors,
					// 		neutral50: "rgba(255, 255, 255, 0.5)", // Placeholder color
					// 	},
					// })}
					onChange={onChange}
					isDisabled={disabled}
				/>
			)}
			{textarea && (
				<textarea
					className="w-full rounded-md border-[0.5px] border-[#04172a] bg-white px-4 py-2 outline-none"
					rows={rows}
					cols={cols}
					disabled={disabled}
					placeholder={placeholder}
					maxLength={maxLength}
					onChange={onChange}
				></textarea>
			)}
		</div>
	);
};

export const customSelectStyles = (
	selectStyleOptions?: any,
	placeholderStyleOptions?: any
) => ({
	control: (defaultStyles: any) => ({
		...defaultStyles,
		"&:hover": { borderColor: "#04172a" },
		height: "2.7rem",
		borderRadius: "0.5em",
		border: "1.4px solid #001746",
		duration: "200",
		color: "white",
		backgroundColor: "transparent",
		boxShadow: `0 0 0 1px 'orange'`,
		outline: "none !important",
		fontSize: "1rem",
		"@media (max-width: 500px)": {
			height: "2rem",
			fontSize: "14px",
		},
		...selectStyleOptions,
	}),
	placeholder: (base: any) => ({
		...base,
		fontWeight: 400,
		"@media (max-width: 500px)": {
			height: "2rem",
			fontSize: "14px",
		},
		...placeholderStyleOptions,
	}),
});
