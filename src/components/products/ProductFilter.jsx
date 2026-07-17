import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const ProductFilter = ({ category, setCategory, sort, setSort }) => {
  return (
    <>
      <FormControl fullWidth size="small">
        <InputLabel>Category</InputLabel>

        <Select
          value={category}
          label="Category"
          onChange={(e) => setCategory(e.target.value)}
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Mobiles">Mobiles</MenuItem>
          <MenuItem value="Laptops">Laptops</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth size="small">
        <InputLabel>Sort</InputLabel>

        <Select
          value={sort}
          label="Sort"
          onChange={(e) => setSort(e.target.value)}
        >
          <MenuItem value="">None</MenuItem>
          <MenuItem value="low">Price Low → High</MenuItem>
          <MenuItem value="high">Price High → Low</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default ProductFilter;
