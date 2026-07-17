import HomeIcon from "@mui/icons-material/Home";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import CategoryIcon from "@mui/icons-material/Category";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import PersonIcon from "@mui/icons-material/Person";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

const menuItems = [
    { text: "Home", icon: <HomeIcon />, path: "/" },
    { text: "Products", icon: <ShoppingBagIcon />, path: "/products" },
    { text: "Categories", icon: <CategoryIcon />, path: "/categories" },
    { text: "Cart", icon: <ShoppingCartIcon />, path: "/cart" },
    { text: "Orders", icon: <ReceiptLongIcon />, path: "/orders" },
    { text: "Profile", icon: <PersonIcon />, path: "/profile" },
    { text: "Admin", icon: <AdminPanelSettingsIcon />, path: "/admin" },
];

export default menuItems;