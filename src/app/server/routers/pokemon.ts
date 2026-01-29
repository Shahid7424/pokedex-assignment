import { z } from "zod";
import { router, publicProcedure } from "../trpc";
import { prisma } from "../db";

export const pokemonRouter = router({
  // PART 1: Single Pokemon
  getPokemon: publicProcedure
    .input(z.string())
    .query(async ({ input }) => {
      const pokemon = await prisma.pokemon.findUnique({
        where: { name: input },
      });

      if (!pokemon) return null;

      return {
        id: pokemon.id,
        name: pokemon.name,
        types: pokemon.types.split(","),
        sprite: pokemon.sprite,
      };
    }),

  // PART 2: Multiple Pokemon
  getPokemonArray: publicProcedure
    .input(z.array(z.string()))
    .query(async ({ input }) => {
      const pokemon = await prisma.pokemon.findMany({
        where: {
          name: { in: input },
        },
      });

      return pokemon.map(p => ({
        id: p.id,
        name: p.name,
        types: p.types.split(","),
        sprite: p.sprite,
      }));
    }),

  // PART 3: Filter by Type
  getPokemonByType: publicProcedure
    .input(z.string().optional())
    .query(async ({ input }) => {
      const pokemon = await prisma.pokemon.findMany({
        where: input
          ? { types: { contains: input } }
          : undefined,
      });

      return pokemon.map(p => ({
        id: p.id,
        name: p.name,
        types: p.types.split(","),
        sprite: p.sprite,
      }));
    }),
});
