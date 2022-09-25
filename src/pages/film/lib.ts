export const useActors = (persons:any) => {
	return persons?.filter((item:any) => {
	if (item.enProfession === 'actor' && item?.name?.length) {
		return item
	}
})
}