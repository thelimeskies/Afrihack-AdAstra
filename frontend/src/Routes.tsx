import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";
import Register from "./views/Register/Register";
import Home from "./views/Dashboard/Home";
import HomePage from "./views/Landing";

const AppRoutes = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="register" element={<Register />} />
				<Route path="login" element={<Login />} />
				<Route element={<Dashboard/>}>
					<Route path="dashboard" index element={<Home/>} />
				</Route>
				<Route path="*" element={<h1>Not Found</h1>} />
			</Routes>
		</Router>

	)
}


export default AppRoutes;
