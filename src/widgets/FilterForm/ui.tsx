import { Controller, useForm } from "react-hook-form"
import { Filter } from "../../features/filter";
import { getYear } from "../../shared/lib";
import style from './styles.module.scss'
export const FilterForm = () => {
	const { handleSubmit, control } = useForm<any>({
		defaultValues: {
			rating: [1,10],
			year: [1960, getYear.getFullYear()],
			ReactSelect: {value: "vanilla", label: "vanilla"}
		}
	});

	const onSubmit = (data:any) => {
		console.log(data)
	}
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
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
				<Filter.FilterRange 
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
			name="ReactSelect"
			control={control}
			render={({field: {onChange, value}}) => (
				<Filter.ReactSelect
				onChange={onChange}
				value={value}
				/>
			)}
			/>
			<section className={style.select}>
			</section>
			<button onSubmit={handleSubmit(onSubmit)}>submit</button>
		</form>
	)
}
