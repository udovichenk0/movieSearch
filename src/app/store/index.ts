import { combineReducers, configureStore } from '@reduxjs/toolkit'
import HeroSlice from '../../reduxStore/Swiper/InfoSlice'
import { commonApi } from '../../shared/api/apiConfig'
import showMoreSlice from '../../reduxStore/ShowMore/showMore.slice'
import authSlice from '../../reduxStore/Auth/auth.slice'
export const reducers = combineReducers({
	heroSlice: HeroSlice,
	showMoreSlice,
	authSlice,
	[commonApi.reducerPath]: commonApi.reducer
})

export const store =  () => configureStore({
	reducer: reducers,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(commonApi.middleware),
})

export type RootState = ReturnType<typeof reducers>
export type AppStore = ReturnType<typeof store>
export type AppDispatch = AppStore['dispatch']