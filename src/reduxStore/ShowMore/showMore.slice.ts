import { createSlice } from "@reduxjs/toolkit";

const showMoreSlice = createSlice({
	name: 'showMore',
	initialState: {
		limit: 3
	},
	reducers: {
		showMore(state){
			state.limit += 3
		}
	}
})

export const {showMore} = showMoreSlice.actions

export default showMoreSlice.reducer