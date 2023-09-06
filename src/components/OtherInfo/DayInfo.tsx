import s from "./OtherInfo.module.scss";
import { Item } from "./OtherInfo";
import { GlobalSvg } from "../../assets/icons/global/GlobalSvg";

interface Props {
	item?: Item;
}

export const DayInfo = ({ item }: Props) => {
	return (
		<div className={s.info}>
			<div className={s.indicator}>
				<GlobalSvg id={item?.icon || "0"} />
			</div>
			<div className={s.name}>{item?.name}</div>
			<div className={s.value}>{item?.value}</div>
		</div>
	);
};
