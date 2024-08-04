'use client'
import React from 'react';
import { Box, Typography, Button, AppBar, Toolbar, IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useRouter } from 'next/navigation';

export default function LandingPage() {
  const router = useRouter();
  const [user, setUser] = React.useState(null) // For auth
  const handleStartToday = () => {
    router.push('/login'); 
  };
  const handleLoginClick = () => {
    router.push('/login');
  };
  
  return (
    <>
      <AppBar 
        position="static" 
        sx={{
          bgcolor: '#234AEA', 
          boxShadow: 'none' 
        }}>
        <Toolbar sx={{ height: '40px' }}>
          <Typography 
            variant="h1" 
            fontSize={'1.5rem'}
            component="div" 
            sx={{ 
              flexGrow: 1, 
              color: '#ffffff',
              margin: '0rem 1rem'
            }}>
            pantryhelp
          </Typography>
          <IconButton onClick={handleLoginClick} 
            sx={{
              padding: '1rem',
              color: '#ffffff',
              '& .MuiSvgIcon-root': {       
                fontSize: '2rem'       
              }
            }}
          >
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box
        width="100vw"
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        sx={{ 
          textAlign: 'center',
          background: 'hsla(225,83%,50%,1)',
          backgroundImage: `
            radial-gradient(at 0% 100%, hsla(256,40%,55%,0.95) 0px, transparent 50%),
            radial-gradient(at 100% 100%, hsla(240,45%,55%,0.48) 0px, transparent 50%)
          `,
          backgroundSize: 'cover',
        }}
      >
        <Typography 
          variant="h1" 
          component="h1"
          fontWeight="bold"
          sx={{ lineHeight: '1' }}
          color='#ffffff'
        >
          No more headache
        </Typography>
        <Typography 
          variant="h2" 
          component="h2"
          fontWeight={250} 
          color='#ffffff'
        >
          with PantryHelp.
        </Typography>
        <Typography 
          variant="caption" 
          component="p"
          fontSize="1.05rem"
          padding="0px"
          margin='1.5rem 0rem'
          color='#ffffff'
        >
          Manage, inventory, expirations, and <br />
          expenses in an all-in-one tracker.
        </Typography>
        <Button 
          variant="contained" 
          onClick={handleStartToday}
          sx={{ 
            marginBottom: '3rem',
            borderRadius: '2rem', 
            padding: '0.75rem 2.5rem', 
            fontWeight: '800', 
            fontSize: '1rem',
            color: '#1976d2',
            backgroundColor: '#ffffff', 
            '&:hover': {
              backgroundColor: '#f0f0f0'
            }
          }}
        >
          Start Today &gt;
        </Button>
        <Box
          component="img"
          src="/phone-mockup.webp" 
          alt="PantryHelp helps organize your pantry."
          sx={{ 
            width: '230px', 
            height: 'auto', 
            borderRadius: '1rem',
            boxShadow: '30px 30px 40px rgba(0, 0, 0, 0.2)'
          }}
        />
      </Box>
    </>
  );
}