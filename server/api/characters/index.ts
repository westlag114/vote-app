import { Character, Prisma } from '$prisma/client'

export type CreateCharacterParams = Prisma.CharacterCreateInput

export type Methods = {
  get: {
    resBody: Character[]
  }
  // post: {
  //   reqBody: CreateCharacterParams
  //   resBody: Character
  // }
}
