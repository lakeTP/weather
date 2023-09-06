import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Weather } from "../types/types";
import { AxiosResponse } from "axios";

type CurrentWeather = {
	weather: Weather;
	isLoading: boolean;
	response: Response;
};

type Response = {
	status: number;
	message: string;
};

const initialState: CurrentWeather = {
	weather: {
		main: {
			temp: 0,
		},
	},
	isLoading: false,
	response: {
		staus: 0,
		message: "",
	},
};

export const CurrentWeather = createSlice({
	name: "current_weather",
	initialState,
	reducers: {
		fetchCurrentWeatherIncrement(state) {
			state.isLoading = true;
		},
		fetchCurrentWeatherDecrement(
			state,
			action: PayloadAction<AxiosResponse<Weather>>
		) {
			state.weather = action.payload.data;
			state.isLoading = false;
			state.response = {
				staus: action.payload.status,
				message: action.payload.statusText,
			};
		},
		fetchCurrentWeatherError(
			state,
			action: PayloadAction<AxiosResponse<Weather>>
		) {
			state.isLoading = false;
			state.response = {
				staus: action.payload.status,
				message: action.payload.statusText,
			};
		},
	},
});

export default CurrentWeather.reducer;
