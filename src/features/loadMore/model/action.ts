import { createSlice } from "@reduxjs/toolkit";

const showMoreSlice = createSlice({
	name: 'model/showMore',
	initialState: {
		filmLimit: 10,
		serialLimit: 10,
		reviewLimit: 3,
	},
	reducers: {
		showMoreFilms(state){
			state.filmLimit += 10
		},
		showMoreSerial(state){
			state.serialLimit += 10
		},
		showMoreReview(state){
			state.reviewLimit += 3
		}
	}
})

export const {showMoreFilms, showMoreSerial, showMoreReview} = showMoreSlice.actions

export default showMoreSlice.reducer