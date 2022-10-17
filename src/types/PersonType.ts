import { FactsType } from "./FactsType"

type BirthPlaceType = {
	value: string
}
type DeathPlaceType = {
	value: string
}
export type MoviesType = {
	id: number
	name: string
	alternativeName: string
	rating: number
	general: boolean
	description: string
}
type ProfessionType = {
value: string
}
type SpousesType = {
	children: number
	divorced: boolean
	divorcedReason: string
	id: number
	name: string
	relation: string
	sex: string
	_id: string
}[]
export type PersonType = {
	age: number
	birthPlace: BirthPlaceType[]
	birthday: string
	countAwards: number
	death: string
	deathPlace: DeathPlaceType[]
	enName: string
	facts: FactsType[]
	growth: number
	id: number
	movies: MoviesType[]
	name: string
	photo: string
	profession: ProfessionType[]
	sex: string
	spouses: SpousesType
	updatedAt: string
	__v: number
}