import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
  IconButton,
} from "@mui/material";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const ProductCard = ({ product }) => {
  return (
    <Card
      sx={{
        borderRadius: 3,
        transition: "0.3s",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: 6,
        },
      }}
    >
      <CardMedia
        component="img"
        height="220"
        image={product.image}
        alt={product.name}
      />

      <CardContent>
        <Typography variant="h6">{product.name}</Typography>

        <Typography color="primary" fontWeight="bold" sx={{ mt: 1 }}>
          {product.price}
        </Typography>
      </CardContent>

      <CardActions
        sx={{
          justifyContent: "space-between",
          px: 2,
          pb: 2,
        }}
      >
        <IconButton color="error">
          <FavoriteBorderIcon />
        </IconButton>

        <Button variant="contained">Add To Cart</Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
