import { Controller, useForm } from "react-hook-form"
import { Filter } from "../../features/filter";
import { getYear } from "../../shared/lib";
export const FilterForm = () => {
	const { handleSubmit, control } = useForm<any>({
		defaultValues: {
			rating: [1,10],
			year: [1960, getYear.getFullYear()]
		}
	});
	return (
		<form onSubmit={handleSubmit(data => console.log(data))}>
			<Controller
			control={control}
			name="rating"
			render={({
			field: { onChange, value },
			}) => (
				<Filter.FilterRange 
				onChange={onChange}
				values={value}
				step={1}
				min={1}
				max={10}
				/>
			)}
			/>
			<Controller
			control={control}
			name="year"
			render={({
			field: { onChange, value },
			}) => (
				<Filter.FilterRange 
				onChange={onChange}
				values={value}
				step={1}
				min={1960}
				max={2022}
				/>
			)}
			/>
		</form>
	)
}