import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import SideNav from "./components/SideNav";

const App = () => {
	return (
		<div className="d-flex vh-100">
			<SideNav />
			<div>
				<Header />
				<Body />
			</div>
		</div>
	);
}

export default App;
