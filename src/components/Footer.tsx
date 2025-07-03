// src/components/Footer.tsx
import { Box, Typography, Link } from '@mui/material';

export default function Footer() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(to right, #1e0033, #5f00ba, #ff00cc)',
        color: 'white',
        py: 4,
        mt: 10,
        textAlign: 'center',
      }}
    >
      <Typography variant="h6" fontWeight={600}>
        TETRABLESS TECH 💡
      </Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        Made with ❤️ by Real-Time Developers | Final Year Project Partner
      </Typography>
      {/* <Box sx={{ mt: 2 }}>
        <Link href="mailto:tetrabless@gmail.com" color="inherit" underline="hover" sx={{ mx: 1 }}>
          Email
        </Link>
        <Link href="tel:9363816161" color="inherit" underline="hover" sx={{ mx: 1 }}>
          Call
        </Link>
        <Link href="https://www.instagram.com" target="_blank" color="inherit" underline="hover" sx={{ mx: 1 }}>
          Instagram
        </Link>
      </Box> */}
      <Typography variant="caption" display="block" sx={{ mt: 2 }}>
        © {new Date().getFullYear()} TETRABLESS. All rights reserved.
      </Typography>
    </Box>
  );
}
