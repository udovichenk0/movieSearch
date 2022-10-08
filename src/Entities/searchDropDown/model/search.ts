import { useAppSelector } from "@/shared/lib";
import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
	name: 'searchSlice',
	initialState: {
		tab: 1
	},
	reducers: {
		setTab(state, typeNumber){
			state.tab = typeNumber.payload
		}
	}	
})

//Selector
const getTab = () => useAppSelector(state => state.searchSlice.tab)

export {getTab}

export const {setTab} = searchSlice.actions

export default searchSlice.reducer