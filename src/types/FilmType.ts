import { PersonType } from "./PersonType"
import { RatingType } from "./RatingType"

type BackdropType = {
	_id: string
	url: string
	previewUrl: string
}

type BudgetType = {
	_id:string
	value: number
	currency: string
}

type CountriesType = {
	name: string
}

type DistributorsType ={
	distributor: string
	distributorRelease: null | string
}
type ExternalIdType = {
	_id: string
	imdb: string
}
export type FactsType = any
type FeesType = {
	russia: {
		currency: string
		value: number
		_id: string
	}
	usa: {
		currency: string
		value: number
		_id: string
	}
	world: {
		currency: string
		value: number
		_id: string
	}
	_id: string
}
type GenresType = {
	name: string
}

type ImagesInfoType = {
	_id: string
	framesCount: number
} 
type LogoType = {
	url: string
	_id: string
}
type NamesType = {
	name: string
}
type PosterType = {
	previewUrl: string
	url: string
	_id: string
}
type PremiereType = {
	bluray: string
	cinema: string
	country: string
	dvd: string
	russia: string
	world: string
	_id: string
}
type ProductionCompaniesType = {
	name: string
	previewUrl: string
	url: string
}
type SequelsAndPrequels = {
	alternativeName: string
	enName: string
	id: number
	name: string
	poster: PosterType
}
type SimilarMoviesType = {
	alternativeName: string
	enName: string
	id: number
	name: string
	poster: PosterType
	_id: string
}  | undefined
type SpokenLanguages = {
	name: string
	nameEn: string
}
type TechnologyType = {
	has3D: boolean
	hasImax: boolean
	_id: string
}
type VideosType = {
	teasers: []
	trailers: {
		name: string
		site: string
		url: string
		_id: string
		size: number
		type: string
	}[]
}
type WatchabilityType = {
	items: {
			logo:{
		url: string
		_id: string
	}
	name: string
	url: string
	_id: string
	}[]
}
export type FilmType = {
	ageRating: null
	alternativeName: string
	backdrop:BackdropType
	budget: BudgetType
	collections: []
	countries: CountriesType[]
	createDate: string
	description: string
	distributors: DistributorsType
	enName: null | string
	externalId: ExternalIdType
	facts: FactsType
	fees: FeesType
	genres:GenresType[]
	id: number
	images: {postersCount: 59, backdropsCount: 11, framesCount: 51}
	imagesInfo: ImagesInfoType
	lists: []
	logo: LogoType
	movieLength: 127
	name: string
	names: NamesType[]
	persons: PersonType[]
	poster: PosterType
	premiere: PremiereType
	productionCompanies: ProductionCompaniesType[]
	rating: RatingType
	ratingMpaa: string
	seasonsInfo: []
	sequelsAndPrequels: SequelsAndPrequels[]
	shortDescription: string
	similarMovies: SimilarMoviesType[] | undefined
	slogan: string
	spokenLanguages: SpokenLanguages[]
	status: string
	technology: TechnologyType
	ticketsOnSale: false
	type: string
	typeNumber: number
	updateDates: string[]
	updatedAt: string
	videos: VideosType
	votes: RatingType
	watchability: WatchabilityType
	year: number
}