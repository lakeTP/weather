import { GlobalSvg } from "../../assets/icons/global/GlobalSvg";
import { DayInfo } from "../OtherInfo/DayInfo";
import { Item } from "../OtherInfo/OtherInfo";
import s from "./Popup.module.scss";
// import s from "./OtherInfo.module.scss"

interface Props {}

export const Popup = ({}: Props) => {
	const items = [
		{
			icon: "temp",
			name: "temperature",
			value: "feels like +40°",
		},
		{
			icon: "pres",
			name: "pressure",
			value: "759 mm rt.st",
		},
		{
			icon: "prec",
			name: "precipitation",
			value: "rain",
		},
		{
			icon: "wind",
			name: "wind",
			value: "3,0 m/s, W",
		},
	];
	return (
		<>
			<div className={s.blur}></div>
			<div className={s.popup}>
				<div className={s.day}>
					<div className={s.temprn}> 12°</div>
					<div className={s.today}>Monday</div>
					<div className={s.icon}>
						<GlobalSvg id="sun" />
					</div>
					<div className={s.time}>
						Time <span>12:00</span>
					</div>
					<div className={s.location}>Krasnodar</div>
				</div>
				<div className={s.infoItems}>
					{items.map((item: Item) => (
						<DayInfo key={item.icon} item={item} />
					))}
				</div>
				<div className={s.close}>
					<GlobalSvg id="close" />
				</div>
			</div>
		</>
	);
};
