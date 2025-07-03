import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4B0082', // TETRABLESS Purple
    },
    secondary: {
      main: '#FF4081',
    },
  },
  typography: {
    fontFamily: '"Bookman Old Style", serif',
    h2: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 500,
    },
  },
});

export default theme;
