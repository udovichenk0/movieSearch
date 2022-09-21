import { useGetNewFilmsQuery } from "../../../shared/api/apiConfig"



export const useGetNewFilms = ({limit}:any) => {
	return useGetNewFilmsQuery(limit)
}