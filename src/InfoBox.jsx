import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox() {
  const INIT_URL =
    "https://plus.unsplash.com/premium_photo-1710966588248-e172c415db3b?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  let info = {
    City: "Delhi",
    feelslike: 37.76,
    humidity: 51,
    temp: 33.56,
    tempMin: 33.56,
    tempMax: 33.6,
    weather: "Overcast cloud"
  };

  return (
    <div className="InfoBox">
      <h3>WeatherInfo - {info.weather}</h3>
      <div className='card-container'>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={INIT_URL}
            title={info.weather}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.City}
            </Typography>
            <Typography variant="body2" color="text.secondary" component={'span'}>
              <p>Temperature = {info.temp}°C</p>
              <p>Humidity = {info.humidity}%</p>
              <p>Min Temp = {info.tempMin}°C</p>
              <p>Max Temp = {info.tempMax}°C</p>
              <p>The Weather can describe as <i>{info.weather}</i> and Feels Like {info.feelslike}°C</p>
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
