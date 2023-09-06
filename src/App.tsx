import { Route, Routes } from "react-router-dom";
import { Day } from "./components/Days/Day";
import { Header } from "./components/Header/Header";
import { OtherInfo } from "./components/OtherInfo/OtherInfo";
import { Home } from "./components/Home";
import { DaysInfo } from "./components/BotInfo/Days";
import { Popup } from "./components/PopUp/Popup";
import { useCustomSelector } from "./hooks/store";

function App() {
	const { weather } = useCustomSelector((state) => state.CurrentWeatherReduser);

	return (
		<div className="global">
			{/* <Popup /> */}
			<div className="app">
				<Header />
				<div className="sosat">
					<Day weather={weather} />
					<Home />
				</div>
				<DaysInfo />
				<Routes>
					<Route path="header" element={<Header />} />
					<Route path="day" element={<Day />} />
					<Route path="otherInfo" element={<OtherInfo />} />
					<Route path="popup" element={<Popup />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
