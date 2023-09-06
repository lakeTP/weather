
import s from "./OtherInfo.module.scss"
import { DayInfo } from "./DayInfo"


interface Props {}
export interface Item {
    icon: string,
        name: string,
        value: string
}

export const OtherInfo = (props: Props) => {
    const items:Item[] = [
    {
        icon: 'temp',
        name: 'temperature',
        value: 'feels like +40°',
    },
    {
        icon: 'pres',
        name: 'pressure',
        value: '759 mm rt.st',
    },
    {
        icon: 'prec',
        name: 'precipitation',
        value: 'rain',
    },
    {
        icon: 'wind',
        name: 'wind',
        value: '3,0 m/s, W',
    }
]

    return (
        <div className={s.OtherInfo}>
            <div className={s.infoItems}>
            {items.map((item: Item) => (
                <DayInfo key={item.icon} item={item}/>
            ))}
            </div>
            <div className={s.image}>
              
            </div>
        </div>
    )
}