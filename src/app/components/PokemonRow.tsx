/* eslint-disable @typescript-eslint/no-explicit-any */

import { TableRow, TableCell } from "@mui/material";

export function PokemonRow({ pokemon }: { pokemon: any }) {
  return (
    <TableRow>
      <TableCell>{pokemon.id}</TableCell>
      <TableCell>{pokemon.name}</TableCell>
      <TableCell>{pokemon.types.join(", ")}</TableCell>
      <TableCell> 
        {pokemon.sprite ? (
          <img
            src={pokemon.sprite}
            width={50}
            height={50}
            alt={pokemon.name}
          />
        ) : null}
      </TableCell>
    </TableRow>
  );
}
