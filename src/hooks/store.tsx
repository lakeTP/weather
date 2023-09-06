import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../Store/store";
import { useSelector } from "react-redux";

export const useCustomDispatch = () => useDispatch<AppDispatch>();
export const useCustomSelector: TypedUseSelectorHook<RootState> = useSelector;
