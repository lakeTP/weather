import s from "./Header.module.scss";
import Select from "react-select";

interface Props {}

export const Header = (props: Props) => {
	const options = [
		{ value: "G1", label: "Krasnodar" },
		{ value: "G2", label: "Gelenjik" },
		{ value: "G3", label: "Mostovskoi" },
		{ value: "G4", label: "Korenovsk" },
	];
	const selectorStyle = {
		control: (styles: any) => ({
			...styles,
			backgroundColor: "rgba(235, 234, 234, 0.7)",
			width: "150px",
			borderRadius: "10px",
			zIndex: "100",
		}),
	};

	return (
		<div className={s.header}>
			<div className={s.wrap}>
				<div className={s.logo}>
					<img alt="" src="/img/svg/weather.svg" />
				</div>
				<div className={s.title}>WeatherToday</div>
			</div>
			<div className={s.wrap}>
				<div className={s.decorlogo}>
					<img alt="decor" src="/img/svg/cloud-lightning.svg" />
				</div>
				<div className={s.selector}>
					<Select
						defaultValue={options[0]}
						styles={selectorStyle}
						options={options}
					/>
				</div>
			</div>
		</div>
	);
};
