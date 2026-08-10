import { TextField } from "@mui/material";

export default function SearchBar({ search, setSearch }) {
  return (
    <TextField
      fullWidth
      label="Search Products"
      variant="outlined"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      sx={{ mb: 3 }}
    />
  );
}