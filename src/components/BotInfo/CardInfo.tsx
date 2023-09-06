import { GlobalSvg } from "../../assets/icons/global/GlobalSvg"
import s from "./BotInfo.module.scss"
import { Day } from "./Days"

interface Props {
    day: Day
}

export const CardInfo = ({day}: Props) => {
    
    return (
        <div className={s.card}>
            <div className={s.day}>{day.day}</div>
            <div className={s.day__info}>{day.day_info}</div>
            <div className={s.img}> <GlobalSvg id={day?.icon || "0"}/> </div>
            <div className={s.temp}>{day.temp_day}</div>
            <div className={s.temp__night}>{day.temp_night}</div>  
            <div className={s.info}>{day.info}</div>
        </div>
    )
}