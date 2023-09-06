import { getWeather } from "../../services/WeatherServices";
import { CurrentWeather } from "../slice/currentWeathert";
import { AppDispatch } from "../store";
import { iCity } from "../types/types";

export const fetchCurrentWeather =
	(payload: iCity) => async (dispatch: AppDispatch) => {
		try {
			dispatch(CurrentWeather.actions.fetchCurrentWeatherIncrement());
			const res = await getWeather(payload);
			if (res.status === 200) {
				dispatch(CurrentWeather.actions.fetchCurrentWeatherDecrement(res));
			} else {
				dispatch(CurrentWeather.actions.fetchCurrentWeatherError(res));
			}
		} catch (error) {
			console.log(error);
		}
	};
