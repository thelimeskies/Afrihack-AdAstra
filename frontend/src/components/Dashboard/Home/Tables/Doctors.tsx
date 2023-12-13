const DoctorTable = () => {
	return (

		<>
			<table className="w-full">
				<thead>
					<tr className="bg-[#0C0C0C] text-white">
						<th>Date Created</th>
						<th>Patient ID</th>
						<th>Patient Home</th>
						<th>Phone Number</th>
						<th>Height(cm)</th>
						<th>Weight(kg)</th>
					</tr>
				</thead>
				<tbody className="text-center">
					<tr className="text-center">
						<td>12/09/2023</td>
						<td>123456789</td>
						<td>Samuel Ashikalaye</td>
						<td>09012345678</td>
						<td>175</td>
						<td>68</td>
					</tr>
					<tr>
						<td>12/09/2023</td>
						<td>123456789</td>
						<td>Samuel Ashikalaye</td>
						<td>09012345678</td>
						<td>175</td>
						<td>68</td>
					</tr>
					<tr>
						<td>12/09/2023</td>
						<td>123456789</td>
						<td>Samuel Ashikalaye</td>
						<td>09012345678</td>
						<td>175</td>
						<td>68</td>
					</tr>
				</tbody>
			</table>
		</>
	)
}

export default DoctorTable;