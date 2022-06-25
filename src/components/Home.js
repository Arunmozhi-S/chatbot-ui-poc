import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Home() {
  return (
    <Card sx={{ maxWidth: 600 }}>
      <CardMedia
        component="img"
        height="300"
        image="/static/images/ZoomInfo.png"
        alt="ZoomInfo"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          ZoomInfo
        </Typography>
        <Typography variant="body1" color="text.secondary">
          It’s Our Business to Grow Yours
          Get the B2B data and software you need to connect with and close your most valuable buyers — all in one operating system.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium">Login</Button>
        <Button size="medium" variant="contained">Free Trial</Button>
      </CardActions>
    </Card>
  );
}

export default Home;