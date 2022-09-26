import React from 'react'
import './burger.scss'
export const Burger = ({reference, isClicked, setClick}:any) => {
	const onBurgerClick = () => {
		setClick(!isClicked)
	}
	React.useEffect(() => {
		if(!isClicked) return
		const handleClick = (e: MouseEvent) =>{
			if(!reference.current) return;
			if(!reference.current.contains(e.target)){
				console.log(e.target);
				
				setClick(false)
			}
		}
			document.addEventListener('click', handleClick)
			return () => {
				document.removeEventListener('click', handleClick)
			}
	}, [isClicked, setClick])
	return (
			<div ref={reference} className='block__burger'>
		<div onClick={onBurgerClick} className={`burger ${isClicked? 'burger__active' : ''}`}>
		<div className="burger__line"></div>
		<div className="burger__line"></div>
		<div className="burger__line"></div>
		</div>
		</div>
		
	)
}