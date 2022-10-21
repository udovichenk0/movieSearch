import { useAppSelector } from "../lib"



export const useAuth = () => {
	const {email, id} = useAppSelector(state => state.AuthSlice)
	return {
		isAuth: !!email,
		email,
		id,
	}
}