import { getCharacters } from '$/service/character'
import { defineController } from './$relay'

export default defineController(() => ({
  get: async () => ({ status: 200, body: await getCharacters() })
}))
