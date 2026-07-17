import {
  Drawer,
  Toolbar,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  Box,
} from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import CategoryIcon from "@mui/icons-material/Category";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import PersonIcon from "@mui/icons-material/Person";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

import { NavLink } from "react-router-dom";

const DRAWER_WIDTH = 240;

const menuItems = [
  {
    text: "Home",
    icon: <HomeIcon />,
    path: "/",
  },
  {
    text: "Products",
    icon: <ShoppingBagIcon />,
    path: "/products",
  },
  {
    text: "Categories",
    icon: <CategoryIcon />,
    path: "/categories",
  },
  {
    text: "Cart",
    icon: <ShoppingCartIcon />,
    path: "/cart",
  },
  {
    text: "Orders",
    icon: <ReceiptLongIcon />,
    path: "/orders",
  },
  {
    text: "Profile",
    icon: <PersonIcon />,
    path: "/profile",
  },
  {
    text: "Admin",
    icon: <AdminPanelSettingsIcon />,
    path: "/admin",
  },
];

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: DRAWER_WIDTH,
          boxSizing: "border-box",
          backgroundColor: "#fafafa",
          borderRight: "1px solid #e0e0e0",
        },
      }}
    >
      <Toolbar />

      {/* Sidebar Title */}

      <Box
        sx={{
          textAlign: "center",
          py: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "primary.main",
          }}
        >
          Navigation
        </Typography>
      </Box>

      <Divider />

      {/* Menu */}

      <List sx={{ mt: 1 }}>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.text}
            component={NavLink}
            to={item.path}
            sx={{
              mx: 1,
              my: 0.5,
              borderRadius: 2,
              color: "text.primary",

              "& .MuiListItemIcon-root": {
                color: "inherit",
                minWidth: 40,
              },

              "&:hover": {
                backgroundColor: "#e3f2fd",
              },

              "&.active": {
                backgroundColor: "#1976d2",
                color: "#fff",

                "& .MuiListItemIcon-root": {
                  color: "#fff",
                },
              },
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>

            <ListItemText
              primary={item.text}
              primaryTypographyProps={{
                fontSize: 15,
                fontWeight: 500,
              }}
            />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
