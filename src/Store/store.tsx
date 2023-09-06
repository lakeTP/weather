import { configureStore } from "@reduxjs/toolkit";
import CurrentWeatherReduser from "./slice/currentWeathert";
export const store = configureStore({
	reducer: {
		CurrentWeatherReduser,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
