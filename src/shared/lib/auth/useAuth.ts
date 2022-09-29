import { useAppSelector } from "../lib"



export const useAuth = () => {
	const {email, id} = useAppSelector(state => state.authSlice)

	return {
		isAuth: !!email,
		email,
		id,
	}
}