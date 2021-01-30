import useAspidaSWR from '@aspida/swr'
import { apiClient } from '~/utils/apiClient'

const CharactersPage = () => {
  const { data: characters } = useAspidaSWR(apiClient.characters)
  if (!characters) return <div>loading</div>

  return (
    <div>
      <p>charactersページです</p>
      {characters.map((character, idx) => (
        <p key={idx}>{character.name}</p>
      ))}
    </div>
  )
}

export default CharactersPage
