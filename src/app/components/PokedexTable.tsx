/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table, TableBody } from "@mui/material";
import { PokemonRow } from "./PokemonRow";

export function PokedexTable({ pokemon }: { pokemon: any[] }) {
  return (
    <Table>
      <TableBody>
        {pokemon.map(p => (
          <PokemonRow key={p.id} pokemon={p} />
        ))}
      </TableBody>
    </Table>
  );
}
