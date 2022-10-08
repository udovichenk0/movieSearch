import { Controller, useForm } from "react-hook-form"
import { getYear } from "@/shared/lib";
import { ButtonSubmit, ResetButton } from "./ui/ButtonFilter";
import { FilterRange } from "./ui/FilterRange";
import { ReactSelect } from "./ui/FilterSelect";
export const FilterForm = () => {
	const { handleSubmit, control } = useForm<any>({
		defaultValues: {
			rating: [1,10],
			year: [1960, getYear.getFullYear()],
			genre: ""
		}
	});
	return (
		<form style={{marginRight: '50px'}}>
			<Controller
			control={control}
			name="rating"
			render={({
			field: { onChange, value },
			}) => (
				<FilterRange 
				onChange={onChange}
				values={value}
				step={1}
				min={1}
				max={10}
				title={'Рейтинг'}
				/>
			)}
			/>
			<Controller
			control={control}
			name="year"
			render={({
			field: { onChange, value },
			}) => (
				<FilterRange 
				onChange={onChange}
				values={value}
				step={1}
				min={1960}
				max={2022}
				title={'Года производства'}
				/>
			)}
			/>
			<Controller
			name="genre"
			control={control}
			render={({field: {onChange, value}}) => (
				<ReactSelect
				onChange={onChange}
				/>
			)}
			/>
			<ButtonSubmit handleSubmit={handleSubmit}/>
			<ResetButton handleSubmit={handleSubmit}/>
		</form>
	)
}
