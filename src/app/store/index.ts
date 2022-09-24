import { combineReducers, configureStore } from '@reduxjs/toolkit'
import HeroSlice from '../../reduxStore/Swiper/InfoSlice'
import { commonApi } from '../../shared/api/apiConfig'
import authSlice from '../../reduxStore/Auth/auth.slice'
import { loadMoreModel } from '../../features/loadMore'
export const reducers = combineReducers({
	heroSlice: HeroSlice,
	showMoreSlice: loadMoreModel.showMoreSlice,
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