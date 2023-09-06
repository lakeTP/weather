import s from "./Day.module.scss";
import { Weather } from "../../Store/types/types";
interface Props {
	weather?: Weather;
}

export const Day = ({ weather }: Props) => {
	return (
		<div className={s.day}>
			<div className={s.topInfo}>
				<div className={s.topWrap}>
					<div className={s.weathertRn}>{Math.floor(weather.main.temp)}</div>
					<div className={s.today}>Today</div>
				</div>
				<div className={s.weathertlogo}>
					<img alt="" src="/img/svg/sun-color-icon.svg" />
				</div>
			</div>
			<div className={s.bottomInfo}>
				<div className={s.timeRn}>
					Time: <span>10:35</span>
				</div>
				<div className={s.location}>Krasnodar</div>
			</div>
		</div>
	);
};
