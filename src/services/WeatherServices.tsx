import { Weather, iCity } from "../Store/types/types";
import api from "../axios";

// export class WeatherServices {
// 	static getCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
// 		return api.get<Weather>(`weather?lat={city}&lon={city}`);
// 	}
// }

export const getWeather = async (city: iCity) => {
	const response = await api.get<Weather>(
		`weather?lat=${city.lat}&lon=${city.lon}`
	);
	return response;
};
