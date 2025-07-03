// HeroSection.tsx
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <>
    <br></br>
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      sx={{
        background: 'linear-gradient(to right, #1e0033, #5f00ba, #ff00cc)',
        color: '#fff',
        py: 10,
        textAlign: 'center',
        borderRadius: 4,
        boxShadow: 5,
        px: 2,
      }}
    >
      <Typography variant="h2" gutterBottom fontWeight={700}>
        🚀 TETRABLESS
      </Typography>
      <Typography variant="h5" gutterBottom>
        Code. Create. Conquer.
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: 600, margin: 'auto', mb: 4 }}>
        ✨ Where Students Become Developers!<br />
        🎓 Final Year CS Projects with end-to-end support.<br />
        🧑‍💻 Learn React, Spring Boot, MySQL, Java from real-time experts.
      </Typography>
      <Button variant="contained" size="large" color="secondary" href="#services">
        Get Started Now
      </Button>
    </Box>
    </>
  );
}
