import { useSearchMovieQuery } from '@/shared/api'
import { Preloader } from '@/shared/ui/Loader'
import { FilmType } from '@/types/FilmType'
import { Link } from 'react-router-dom'
import { searchModel } from '.'
import style from './styles.module.scss'


export const SearchDropDown = ({title}:{title:string}) => {
	const tab = searchModel.getTab()
	const {data,isFetching} = useSearchMovieQuery({title, tab})
	return (
		<>
			<div className={style.wrapper}>
				{isFetching? 
				<div className={style.preload}>
					<Preloader/>
				</div>
				: data?.docs.length
				? data?.docs.map((item:FilmType) => {
						return (
						<Link to={`film/${item.id}`} key={item.id}>	
							<div className={style.box}>
								<div className={style.left}>
									<div className={style.imageContainer}>
										<img  src={item?.poster?.url} alt='' />
									</div>
									<div>
										<div>{item.name}</div>
										<div>{item.year}</div>
									</div>
								</div>
							</div>
						</Link>
						)
					})
					: <div>not found</div>
				}
			</div>
		</>
	)
}