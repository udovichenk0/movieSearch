import style from './styles.module.scss'
export const TextInput = ({label, onChange, placeholder, name, inputRef, minLength, value}:any) => {
	return (
		<>
			<label className={style.label} htmlFor={label}>{label}</label>
			<input placeholder={placeholder} 
			minLength={minLength}
			required name={name} 
			ref={inputRef} className={style.input} 
			value={value}
			onChange={onChange}/>
		</>

	)
}

//{...register('password', { required: true })}