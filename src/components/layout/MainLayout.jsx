import { Box, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const drawerWidth = 240;

const MainLayout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      {/* Header */}
      <Header />

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: `calc(100% - ${drawerWidth}px)`,
          minHeight: "100vh",
          bgcolor: "#f5f5f5",
        }}
      >
        {/* Header Space */}
        <Toolbar />

        {/* Page Content */}
        <Outlet />

        {/* Footer */}
        <Footer />
      </Box>
    </Box>
  );
};

export default MainLayout;
