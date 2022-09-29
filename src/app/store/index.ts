import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { commonApi } from '../../shared/api/apiConfig'
import { loadMoreModel } from '../../features/loadMore'
import { AuthSlice, viewerModel } from '../../Entities/viewer'
export const reducers = combineReducers({
	showMoreSlice: loadMoreModel.showMoreSlice,
	AuthSlice,
	[commonApi.reducerPath]: commonApi.reducer
})

export const store =  () => configureStore({
	reducer: reducers,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(commonApi.middleware),
})

export type RootState = ReturnType<typeof reducers>
export type AppStore = ReturnType<typeof store>
export type AppDispatch = AppStore['dispatch']