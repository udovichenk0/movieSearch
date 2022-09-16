// age: 38
// birthPlace: (3) [{…}, {…}, {…}]
// birthday: "1983-08-11T00:00:00.000Z"
// countAwards: 1
// death: null
// deathPlace: null
// enName: "Chris Hemsworth"
// facts: (3) [{…}, {…}, {…}]
// growth: 190
// id: 1300401
// movies: (135) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, …]
// name: "Крис Хемсворт"
// photo: "https://st.kp.yandex.net/images/actor_iphone/iphone360_1300401.jpg"
// profession: (2) [{…}, {…}]
// sex: "Мужской"
// spouses: [{…}]
// updatedAt: "2022-08-09T10:26:22.730Z"

import { FactsType } from "./FactsType"

// __v: 0
type BirthPlaceType = {
	value: string
}
type DeathPlaceType = {
	value: string
}
type MoviesType = {
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
	facts: FactsType
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