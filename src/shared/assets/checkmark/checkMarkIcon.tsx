type IconPropsType = {
	size: number
	color: string
	style: string
}

export const CheckMarkIcon = ({size, color,style}: IconPropsType) => {
	return (
		<div style={{width: size, height: size}}>
			<svg className={style} width={'100%'} style={{width: '100%', height: '100%'}} viewBox="0 0 48 48" fill='none' xmlns="http://www.w3.org/2000/svg">
				<rect width="48" height="48" fill="white" fillOpacity="0"/>
				<path d="M14 24L15.25 25.25M44 14L24 34L22.75 32.75" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
				<path d="M4 24L14 34L34 14" stroke={color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
			</svg>
		</div>
	)
}