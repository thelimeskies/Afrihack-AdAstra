import React from "react";

const NursesTable = () => {
	const tableData = [
		{
			date: "12/09/2023",
			id: "123456789",
			name: "Samuel Ashikalaye",
			phone: "09012345678",
			height: "175",
			weight: "68"
		},
		{
			date: "12/09/2023",
			id: "123456789",
			name: "Samuel Ashikalaye",
			phone: "09012345678",
			height: "175",
			weight: "68"
		},
		{
			date: "12/09/2023",
			id: "123456789",
			name: "Samuel Ashikalaye",
			phone: "09012345678",
			height: "175",
			weight: "68"
		},
		{
			date: "12/09/2023",
			id: "123456789",
			name: "Samuel Ashikalaye",
			phone: "09012345678",
			height: "175",
			weight: "68"
		},
		{
			date: "12/09/2023",
			id: "123456789",
			name: "Samuel Ashikalaye",
			phone: "09012345678",
			height: "175",
			weight: "68"
		},
	]
	return (

		<>
			<table className="w-full">
				<thead>
					<tr className="bg-[#0C0C0C] text-[14px] font-normal text-white py-4 rounded-tl-md">
						<th className="py-2">Date Created</th>
						<th>Nurse ID</th>
						<th>Nurse Name</th>
						<th>Phone Number</th>
						<th>Height (cm)</th>
						<th>Weight (kg)</th>
					</tr>
				</thead>
				<tbody className="text-center text-[14px]">
					{
						tableData.map((data) => {
							return(
								<tr className="text-center">
									<td className="py-4">{data.date}</td>
									<td className="py-4">{data.id}</td>
									<td className="py-4">{data.name}</td>
									<td className="py-4">{data.phone}</td>
									<td className="py-4">{data.height}</td>
									<td className="py-4">{data.weight}</td>
								</tr>
							)
						})
					}
				</tbody>
			</table>
		</>
	)
}

export default NursesTable;