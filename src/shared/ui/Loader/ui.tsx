import { ColorRing } from 'react-loader-spinner'
export const Preloader = () => {
	return (
		<ColorRing
	visible={true}
	height="80"
	width="80"
	ariaLabel="blocks-loading"
	wrapperStyle={{}}
	wrapperClass="blocks-wrapper"
	colors={['#509EE3', '#509EE3', '#509EE3', '#509EE3', '#509EE3']}
/>
)
}
