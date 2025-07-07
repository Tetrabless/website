// src/components/Navbar.tsx
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as ScrollLink } from 'react-scroll';
import { useState } from 'react';
import logo from '../assets/tetrabelss.jpeg';

const navItems = [
  { label: 'Home', to: 'hero' },
  { label: 'Services', to: 'services' },
  { label: 'Contact', to: 'contact' },
];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('hero');
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <Box sx={{ textAlign: 'center', mt: 5 }}>
      <List>
        {navItems.map((item) => (
          <ScrollLink
            key={item.to}
            to={item.to}
            smooth
            duration={500}
            offset={-70}
            onClick={() => {
              setActiveTab(item.to);
              setDrawerOpen(false); // Close drawer when an item is clicked
            }}
          >
            <ListItem button>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontWeight: activeTab === item.to ? 800 : 400,
                  sx: {
                    color: '#fff',
                    borderBottom: activeTab === item.to ? '2px solid white' : 'none',
                    textAlign: 'center',
                  },
                }}
              />
            </ListItem>
          </ScrollLink>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          background: 'linear-gradient(to right, rgb(84, 7, 146), #5f00ba, #ff00cc)',
          boxShadow: 'none',
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Logo & Brand Name */}
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

          {/* Desktop Menu */}
          {!isMobile && (
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
          )}

          {/* Mobile Hamburger */}
          {isMobile && (
            <IconButton color="inherit" edge="end" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile Menu */}
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            background: 'linear-gradient(to right, rgb(84, 7, 146), #5f00ba, #ff00cc)',
            color: '#fff',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
