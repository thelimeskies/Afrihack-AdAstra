import { BsPersonAdd } from "react-icons/bs";

const PatientsRecord = () => {
	return(
		<div className="flex flex-col gap-y-6">
			<div className="flex justify-between items-center">
				<h1>Patient Records</h1>
				<button className="flex gap-2 px-4 py-2 bg-[#0C0C0C]">
					<BsPersonAdd/>
					New Patient
				</button>
			</div>
			<div>
				<table>
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
					<tbody>
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
			</div>
		</div>
	)
}

export default PatientsRecord;