import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";

const categories = [
  "Mobiles",
  "Laptops",
  "Fashion",
  "Electronics",
  "Home",
  "Sports",
];

const products = [
  {
    id: 1,
    name: "iPhone 16 Pro",
    price: "₹1,29,999",
    image: "https://picsum.photos/300/200?random=1",
  },
  {
    id: 2,
    name: "Samsung S25",
    price: "₹99,999",
    image: "https://picsum.photos/300/200?random=2",
  },
  {
    id: 3,
    name: "MacBook Pro",
    price: "₹1,79,999",
    image: "https://picsum.photos/300/200?random=3",
  },
];

const Home = () => {
  return (
    <Box>
      {/* Hero Banner */}

      <Box
        sx={{
          height: 250,
          bgcolor: "#1976d2",
          borderRadius: 2,
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Typography variant="h3" fontWeight="bold">
          Welcome to ShopEasy
        </Typography>

        <Typography variant="h6" sx={{ mt: 2 }}>
          Best Deals Every Day
        </Typography>

        <Button variant="contained" color="warning" sx={{ mt: 3 }}>
          Shop Now
        </Button>
      </Box>

      {/* Categories */}

      <Typography variant="h5" fontWeight="bold" mb={2}>
        Shop by Category
      </Typography>

      <Grid container spacing={2} mb={4}>
        {categories.map((category) => (
          <Grid size={{ xs: 6, sm: 4, md: 2 }} key={category}>
            <Card sx={{ textAlign: "center", p: 2 }}>
              <Typography>{category}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Featured Products */}

      <Typography variant="h5" fontWeight="bold" mb={2}>
        Featured Products
      </Typography>

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={product.id}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
              />

              <CardContent>
                <Typography variant="h6">{product.name}</Typography>

                <Typography color="primary" fontWeight="bold">
                  {product.price}
                </Typography>

                <Button variant="contained" fullWidth sx={{ mt: 2 }}>
                  Add To Cart
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
