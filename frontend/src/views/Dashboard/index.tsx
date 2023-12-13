import { Outlet } from "react-router-dom";
import Sidebar from "./../../components/Dashboard/Sidebar"
import Topbar from "../../components/Topbar";

const Dashboard = () => {
	return (
		<div className="flex">
			<Sidebar />
			<div className="flex w-full flex-col gap-8 p-8">
				<Topbar />
				<Outlet />
			</div>
		</div>
	)
}

export default Dashboard;