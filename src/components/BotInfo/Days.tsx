import s from "./BotInfo.module.scss";
import { CardInfo } from "./CardInfo";
import { Tabs } from "./Tabs";

interface Props {}

export interface Day {
	day: string;
	day_info: string;
	icon: string;
	temp_day: string;
	temp_night: string;
	info: string;
}

export const DaysInfo = (props: Props) => {
	const days: Day[] = [
		{
			day: "Today",
			day_info: "28 may",
			icon: "rain",
			temp_day: "+26°",
			temp_night: "+18°",
			info: "partly cloudy",
		},
		{
			day: "Monday ",
			day_info: "29 may",
			icon: "rain",
			temp_day: "+25°",
			temp_night: "+18°",
			info: "small rain",
		},
		{
			day: "Tuesday",
			day_info: "30 may",
			icon: "sun",
			temp_day: "+26°",
			temp_night: "+17°",
			info: "partly cloudy",
		},
		{
			day: "Wednesday",
			day_info: "31 may",
			icon: "cloud",
			temp_day: "+24°",
			temp_night: "+17°",
			info: "partly cloudy",
		},
		{
			day: "Thursday",
			day_info: "1 June",
			icon: "rain",
			temp_day: "+26°",
			temp_night: "+18°",
			info: "partly cloudy",
		},
		{
			day: "Friday",
			day_info: "2 June",
			icon: "sun",
			temp_day: "+27°",
			temp_night: "+18°",
			info: "partly cloudy",
		},
		{
			day: "Saturday ",
			day_info: "3 June",
			icon: "sun",
			temp_day: "+25°",
			temp_night: "+17°",
			info: "partly cloudy",
		},
	];
	return (
		<>
			<Tabs />
			<div className={s.days}>
				{days.map((day: Day) => (
					<CardInfo day={day} key={day.day} />
				))}
			</div>
		</>
	);
};
