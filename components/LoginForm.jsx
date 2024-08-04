'use client'

import {
    Avatar,
    Button,
    CssBaseline,
    TextField,
    FormControlLabel,
    Checkbox,
    Link,
    Grid,
    Box,
    Typography,
    Container
  } from '@mui/material';

import Copyright from '@/helpers/copyright';

// Authentication and routing
import { auth } from '@/firebase';
import { signInWithEmailAndPassword, onAuthStateChanged, updateCurrentUser} from 'firebase/auth';
import { useRouter } from 'next/navigation';

export default function SignIn() {
  const router = useRouter();

  // Manage authentication state using firebase
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
  })

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });

    try {
      const user =  await signInWithEmailAndPassword(auth, data.get('email'), data.get('password'))
      console.log(user)
      router.push('/dashboard');
    } catch (error) {
      console.log(error.message)
      alert(error.message)
    }

  };

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" color="text.secondary" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline'}}} >
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" color="text.secondary" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline'}}} >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
  );
}