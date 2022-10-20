import { useRef } from 'react';
import { getTrackBackground, Range } from 'react-range';
import { validNumber } from '../../lib';
import style from './styles.module.scss'

export const FilterRange = ({onChange,step, min, max, values,title}:any) => {
const ref = useRef(null)
return ( 

	<div className={style.box}>
		<h1 className={style.title}>{title}</h1>
		<div className={style.input__container}>
		<label htmlFor="" className={style.label}>
		От
		<input className={style.input} type='number'value={values[0]}
			onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
			onChange([validNumber(e?.target.value || min,min, max), values[1]])} ref={ref} 
		/>
		</label>
		<label htmlFor="" className={style.label}>
		До
		<input className={style.input} type='number'value={values[1]}
			onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
			onChange([values[0],validNumber(e?.target.value || min,min, max)])} ref={ref} 
		/>
		</label>
		</div>
		<Range
        step={step}
        min={min}
        max={max}
        values={values}
        onChange={onChange}
        renderTrack={({ props, children }) => (
        <div
            {...props}
            style={{
            ...props.style,
            height: '3px',
            width: '100%',
			background: getTrackBackground({
                values,
                colors: ["#ccc", "rgb(80, 80, 158)", "#ccc"],
                min,
                max
            }),
            }}
        >
            {children}
        </div>
        )}
        renderThumb={({ props }) => (
        <div
            {...props}
            style={{
            ...props.style,
            height: '17px',
            width: '17px',
			backgroundColor: '#fff',
			boxShadow: 'rgb(0 0 0 / 40%) 0px 2px 8px',
			borderRadius: '50%'
            }}
        />
        )}
    />
	</div>
)
}