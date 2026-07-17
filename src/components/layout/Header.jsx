import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Box,
  TextField,
  InputAdornment,
  Tooltip,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const DRAWER_WIDTH = 240;

const Header = () => {
  const [search, setSearch] = useState("");

  return (
    <AppBar
      position="fixed"
      elevation={2}
      sx={{
        width: `calc(100% - ${DRAWER_WIDTH}px)`,
        ml: `${DRAWER_WIDTH}px`,
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar>
        {/* Logo */}

        <Typography
          variant="h6"
          component="div"
          sx={{
            fontWeight: "bold",
            cursor: "pointer",
            mr: 4,
            whiteSpace: "nowrap",
          }}
        >
          🛒 ShopEasy
        </Typography>

        {/* Search Box */}

        <TextField
          size="small"
          placeholder="Search Products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{
            bgcolor: "white",
            borderRadius: 1,
            width: {
              xs: 160,
              sm: 220,
              md: 350,
              lg: 450,
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
          }}
        />

        {/* Push Icons to Right */}

        <Box sx={{ flexGrow: 1 }} />

        {/* Wishlist */}

        <Tooltip title="Wishlist">
          <IconButton color="inherit">
            <FavoriteBorderIcon />
          </IconButton>
        </Tooltip>

        {/* Cart */}

        <Tooltip title="Cart">
          <IconButton color="inherit">
            <Badge badgeContent={0} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Tooltip>

        {/* Notifications */}

        <Tooltip title="Notifications">
          <IconButton color="inherit">
            <Badge badgeContent={2} color="error">
              <NotificationsNoneIcon />
            </Badge>
          </IconButton>
        </Tooltip>

        {/* Profile */}

        <Tooltip title="Profile">
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
