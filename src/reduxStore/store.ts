import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit'
import HeroSlice from './Swiper/InfoSlice'
import { movieApi } from '../services/apiConfig'
import showMoreSlice from './ShowMore/showMore.slice'
import authSlice from './Auth/auth.slice'
const reducers = combineReducers({
	heroSlice: HeroSlice,
	showMoreSlice,
	authSlice,
	[movieApi.reducerPath]: movieApi.reducer
})

export const store =  () => configureStore({
	reducer: reducers,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(movieApi.middleware),
})

export type RootState = ReturnType<typeof reducers>
export type AppStore = ReturnType<typeof store>
export type AppDispatch = AppStore['dispatch']