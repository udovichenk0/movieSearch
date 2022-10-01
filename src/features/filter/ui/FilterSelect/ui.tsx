import { useRef } from 'react';
import Select, { CSSObjectWithLabel, StylesConfig } from 'react-select';
import { MyOptionType, options } from './config';


const styles:StylesConfig<MyOptionType, false> = {
	menu: () => ({
		borderRadius: '5px',
		position: 'absolute',
		backgroundColor: '#fff',
		width: '100%',
	}),
	control: (base:CSSObjectWithLabel) => ({
		...base,
		border: '1px solid rgba(34, 34, 34, 0.5)',
		borderRadius: '5px',
		marginBottom: '30px'
	  })
  };
export const ReactSelect = ({onChange}: {onChange: (event: string) => void}) => {
	const onInputChange = (inputValue:MyOptionType) => {
		onChange(inputValue.value)
	}
	const selectRef = useRef<any>()
	return (
		<>
		<h3 style={{fontSize: '20px', fontWeight: '600', marginBottom: '15px'}}>Жанры</h3>
		<Select<any, false, any>
		defaultValue={options[0]}
		ref={selectRef}
    	options={options}
		styles={styles}
		onChange={onInputChange}
		theme={(theme) => ({
			...theme,
			borderRadius: 0,
			colors: {
			...theme.colors,
			primary25: 'rgb(189 187 187 / 43%)',
			primary: 'rgb(80, 80, 158)',
			},
		})}
  />
		</>
	)
}