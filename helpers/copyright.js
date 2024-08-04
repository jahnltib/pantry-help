import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Copyright = (props) => (
  <Typography variant="body2" color="text.secondary" align="center" {...props}>
    {'Copyright © '}
      Pantryhelp 
    {' '}
    {new Date().getFullYear()}
    {'.'}
  </Typography>
);

export default Copyright;