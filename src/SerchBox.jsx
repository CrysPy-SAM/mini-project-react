import "./SerchBox.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function SearchBox() {
  let [city, setcity] = useState("");
  const API_URL = "https://api.openweathermap.org/data/2.5/weather?";
  const API_Key = "4fa3e87a110a147fa3cbf5f1dc7b5346";

  let getWeathereInfo = async () => {
    try {
      let response = await fetch(`${API_URL}q=${city}&appid=${API_Key}&units=metric`);
      let data = await response.json();
      console.log(data);
      let result = {
        City:city,
        temp: data.main.temp,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
        humidity: data.main.humidity,
        feelsLike: data.main.feels_like,
        weather: data.weather[0].description,

      }
      console.log(result);

    } catch  (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  let handleChange = (evt) => {
    setcity(evt.target.value);
  };

  let handleSubmit = (evt) => {
    evt.preventDefault();
    getWeathereInfo(); 
    setcity("");
  };

  return (
    <div className="search-box">
      <h3>Search for the weather</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City-Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}
