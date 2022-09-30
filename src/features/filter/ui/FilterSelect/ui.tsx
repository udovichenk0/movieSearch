import React from 'react';
import Select, { components, IndicatorsContainerProps, MenuProps } from 'react-select';
import { options } from './config';
const styles = {
	menu: (base:any) => ({
		borderRadius: '5px'
	}),
	control: (base:any) => ({
		...base,
		border: '1px solid rgba(34, 34, 34, 0.5)',
		borderRadius: '5px',
		// This line disable the blue border
		boxShadow: 'none'
	  })
  };


export const ReactSelect = ({onChange, value}:any) => {
	return (
		<Select<any, false, any>
		defaultValue={options[0]}
    	options={options}
		styles={styles}
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
	)
}