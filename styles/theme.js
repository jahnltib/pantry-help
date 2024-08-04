// In your `layout.jsx` or `RootLayout.jsx` file
import { Inter } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const inter = Inter({
  subsets: ['latin'],
  weights: ['100', '300', '400', '700'], // Specify the weights you need
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#234AEA',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f0f0f0',
    }
  },
  typography: {
    fontFamily: inter.style.fontFamily,
    p: {
      fontFamily: inter.style.fontFamily,
      fontSize: '1rem',
      fontWeight: 400,
      color: '#333333',
    },
    h1: {
      fontFamily: inter.style.fontFamily,
      fontSize: '3.5rem',
      fontWeight: 800,
      color: '#333333',
    },
    h2: {
      fontFamily: inter.style.fontFamily,
      fontSize: '3.5rem',
      fontWeight: 300,
      color: '#333333',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textAlign: 'center',
          borderRadius: '2rem',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem', 
          paddingTop: '0.5rem', 
          paddingBottom: '0.5rem', 
        },
      },
    },
  },
});

export default theme;