import { depend } from 'velona'
import { Character, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getCharacters = depend(
  { prisma: prisma as { character: { findMany(): Promise<Character[]> } } },
  async ({ prisma }) => await prisma.character.findMany()
)
