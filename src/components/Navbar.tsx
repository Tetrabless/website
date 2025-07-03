import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';
import logo from '../assets/tetrabelss.jpeg';
import { useState } from 'react';

const navItems = [
  { label: 'Home', to: 'hero' },
  { label: 'Services', to: 'services' },
  { label: 'Contact', to: 'contact' },
];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('hero');

  return (
    <AppBar
      position="sticky"
      sx={{
        background: 'linear-gradient(to right,rgb(84, 7, 146), #5f00ba, #ff00cc)',
        boxShadow: 'none',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Logo + Title */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img
            src={logo}
            alt="Tetrabless Logo"
            style={{ height: 40, width: 40, borderRadius: '50%', marginRight: 8 }}
          />
          <Typography variant="h6" sx={{ fontWeight: 700, color: '#fff' }}>
            TETRABLESS
          </Typography>
        </Box>

        {/* Navigation Buttons */}
        <Box>
          {navItems.map((item) => (
            <ScrollLink
              key={item.to}
              to={item.to}
              smooth
              duration={500}
              spy
              offset={-70}
              onSetActive={() => setActiveTab(item.to)}
              style={{ textDecoration: 'none' }}
            >
              <Button
                sx={{
                  color: '#fff',
                  fontWeight: activeTab === item.to ? 800 : 400,
                  borderBottom: activeTab === item.to ? '2px solid #fff' : 'none',
                  borderRadius: 0,
                }}
              >
                {item.label}
              </Button>
            </ScrollLink>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
