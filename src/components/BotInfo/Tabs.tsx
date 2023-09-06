import s from "./BotInfo.module.scss";

interface Props {}

export interface Tab {
	value: string;
}

export const Tabs = (props: Props) => {
	const tabs: Tab[] = [
		{
			value: "Weather forecast for 7 days",
		},
		{
			value: "Weather forecast for 10 days",
		},
		{
			value: "Monthly weather forecast",
		},
	];
	return (
		<div className={s.tabs}>
			<div className={s.tabs__wrap}>
				{tabs.map((tab) => (
					<div className={s.tab} key={tab.value}>
						{tab.value}
					</div>
				))}
			</div>
			<div className={s.cancel}>Cancel</div>
		</div>
	);
};
