import { useAppSelector } from "@/shared/lib";

export const getReviewLimit = () => 
	useAppSelector(state => state.showMoreSlice.reviewLimit)
