import "./SerchBox.css"; // new CSS file
import TextField from "@mui/material/TextField"
import Button from '@mui/material/Button';
import { useState } from "react";

export default function SearchBox() {
    let [city, setcity] = useState(""); 

    let handleChange = (evt)=>{
      setcity (evt.target.value)
    };

    let handleSubmit = (evt) =>{
        evt.preventDefault();
        console.log(city);
        setcity("");
        
    }

    return (
        <div className="search-box">
            <h3>Search for the weather</h3>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City-Name" variant="outlined" required value={city}  onChange={handleChange}/>
                <br /><br />
                <Button variant="contained" type="submit">Search</Button>
            </form>
        </div>
    );
}
