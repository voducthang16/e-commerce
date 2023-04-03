import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import loadingSlice from "./slice/loading.slice";
export const store = configureStore({
    reducer: {
        loading: loadingSlice,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
