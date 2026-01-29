import { Select, MenuItem } from "@mui/material";

export function PokemonTypeSelection({
  selectedType,
  selectType,
}: {
  selectedType?: string;
  selectType: (type?: string) => void;
}) {
  return (
    <Select
      value={selectedType ?? ""}
      onChange={e => selectType(e.target.value || undefined)}
    >
      <MenuItem value="">All</MenuItem>
      <MenuItem value="grass">Grass</MenuItem>
      <MenuItem value="fire">Fire</MenuItem>
      <MenuItem value="water">Water</MenuItem>
    </Select>
  );
}
