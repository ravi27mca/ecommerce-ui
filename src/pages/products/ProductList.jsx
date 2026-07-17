import { useMemo, useState } from "react";
import { Grid, Typography, Stack } from "@mui/material";

import ProductCard from "../../components/products/ProductCard";
import ProductSearch from "../../components/products/ProductSearch";
import ProductFilter from "../../components/products/ProductFilter";

const products = [
  {
    id: 1,
    name: "iPhone 16 Pro",
    price: 129999,
    category: "Mobiles",
    image: "https://picsum.photos/300/200?random=10",
  },
  {
    id: 2,
    name: "Samsung S25",
    price: 99999,
    category: "Mobiles",
    image: "https://picsum.photos/300/200?random=11",
  },
  {
    id: 3,
    name: "MacBook Pro",
    price: 179999,
    category: "Laptops",
    image: "https://picsum.photos/300/200?random=12",
  },
  {
    id: 4,
    name: "Dell XPS",
    price: 139999,
    category: "Laptops",
    image: "https://picsum.photos/300/200?random=13",
  },
  {
    id: 5,
    name: "Sony Headphones",
    price: 19999,
    category: "Electronics",
    image: "https://picsum.photos/300/200?random=14",
  },
  {
    id: 6,
    name: "Apple Watch",
    price: 45999,
    category: "Electronics",
    image: "https://picsum.photos/300/200?random=15",
  },
];

const ProductList = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search
    if (search) {
      result = result.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    // Category Filter
    if (category !== "All") {
      result = result.filter((product) => product.category === category);
    }

    // Sorting
    if (sort === "low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [search, category, sort]);

  return (
    <>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Products
      </Typography>

      <Stack direction={{ xs: "column", md: "row" }} spacing={2} sx={{ mb: 4 }}>
        <ProductSearch search={search} setSearch={setSearch} />

        <ProductFilter
          category={category}
          setCategory={setCategory}
          sort={sort}
          setSort={setSort}
        />
      </Stack>

      <Grid container spacing={3}>
        {filteredProducts.map((product) => (
          <Grid
            key={product.id}
            size={{
              xs: 12,
              sm: 6,
              md: 4,
              lg: 3,
            }}
          >
            <ProductCard
              product={{
                ...product,
                price: `₹${product.price.toLocaleString("en-IN")}`,
              }}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ProductList;
