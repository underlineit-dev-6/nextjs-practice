import { CharacterDataWrapper } from "@/types/marvels"
import md5 from "md5"

const API_BASE_URL = "https://gateway.marvel.com/v1/public"

const API_PUBLIC_KEY = "dc8b841ae10b6c7c8e893a162cab7535"
const API_PRIVATE_KEY = "e978d97ca92669f31a60186f4019c9832e770f51"


const getTimeStamp = () => Date.now().toString()
const timeStamp = getTimeStamp()

const getHash = (timeStamp: string) => md5(timeStamp + API_PRIVATE_KEY + API_PUBLIC_KEY)

const hash = getHash(timeStamp)
const query = `ts=${timeStamp}&apikey=${API_PUBLIC_KEY}&hash=${hash}`

const handleResponse = async <T>(response: Response) => {
  if (!response.ok) {
    // throw new Error(response.statusText)
  }
  const data = await response.json()
  return data.data as T
}
export const getCharacters = async (): Promise<CharacterDataWrapper> => {
  const url = `${API_BASE_URL}/characters?${query}`
  const response = await fetch(url)
  return handleResponse<CharacterDataWrapper>(response)
}

export const getCharacterDetails = async (characterId: string): Promise<CharacterDataWrapper> => {
  const url = `${API_BASE_URL}/characters/${characterId}?${query}`
  const response = await fetch(url)
  return handleResponse<CharacterDataWrapper>(response)
}

export const searchedCharacters = async (queryParams: string | null): Promise<CharacterDataWrapper> => {
  const url = `${API_BASE_URL}/characters?nameStartsWith=${queryParams}&limit=99&${query}`
  const response = await fetch(url)
  return handleResponse<CharacterDataWrapper>(response)
}