import { useAppSelector } from "../utils/typedHooks/useAppHooks"

export const useAuth = () => {
	const {email, id} = useAppSelector(state => state.authSlice)

	return {
		isAuth: !!email,
		email,
		id,
	}
}