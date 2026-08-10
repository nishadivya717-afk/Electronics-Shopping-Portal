import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

export default function CategoryFilter({ category, setCategory }) {
  return (
    <FormControl fullWidth>
      <InputLabel id="category-label">
        Category
      </InputLabel>

      <Select
        labelId="category-label"
        value={category}
        label="Category"
        onChange={(e) => setCategory(e.target.value)}
      >
        <MenuItem value="All">
          All
        </MenuItem>

        <MenuItem value="Smartphones">
          Smartphones
        </MenuItem>

        <MenuItem value="Laptops">
          Laptops
        </MenuItem>

        <MenuItem value="Headphones">
          Headphones
        </MenuItem>

        <MenuItem value="Accessories">
          Accessories
        </MenuItem>

        <MenuItem value="Smart Watches">
          Smart Watches
        </MenuItem>

        <MenuItem value="Tablets">
          Tablets
        </MenuItem>

        <MenuItem value="Speakers">
          Speakers
        </MenuItem>
      </Select>
    </FormControl>
  );
}