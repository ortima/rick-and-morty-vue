export interface Character {
  id: number
  name: string
  status: string
  species: string
  gender: string
  image: string
}

export interface Info {
  count: number
  next: string
  pages: number
  prev: string
}

export interface IGetCharactersResponse {
  info: Info
  results: Character[]
}
