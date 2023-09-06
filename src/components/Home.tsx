import { OtherInfo } from "./OtherInfo/OtherInfo";
import s from "./Home.module.scss";

import { useEffect } from "react";
import { useCustomDispatch } from "../hooks/store";
import { fetchCurrentWeather } from "../Store/thunks/thunksCurrentWeather";

interface Props {}

export const Home = (props: Props) => {
	const dispatch = useCustomDispatch();

	useEffect(() => {
		dispatch(
			fetchCurrentWeather({
				lat: "45,0241",
				lon: "38,5833",
			})
		);
	}, []);

	return (
		<div className={s.home}>
			<OtherInfo />
		</div>
	);
};
