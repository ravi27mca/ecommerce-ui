import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        mt: 5,
        py: 2,
        textAlign: "center",
        borderTop: "1px solid #ddd",
      }}
    >
      <Typography variant="body2">
        © 2026 ShopEasy. All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
