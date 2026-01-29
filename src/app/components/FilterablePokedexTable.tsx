"use client";
import { useState } from "react";
import { trpc } from "@/utils/trpc";
import { PokemonTypeSelection } from "./PokemonTypeSelection";
import { PokedexTable } from "./PokedexTable";

export function FilterablePokedexTable() {
  const [type, setType] = useState<string | undefined>();
  const { data } = trpc.pokemon.getPokemonByType.useQuery(type);

  if (!data) return null;

  return (
    <>
      <PokemonTypeSelection selectedType={type} selectType={setType} />
      <PokedexTable pokemon={data} />
    </>
  );
}
