import { useState } from "react";
import { CircularProgress, Typography, Grid, InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import useStyles from './styles.js';
import PlaceDetails from '../PlaceDetails/placeDetails.js';



const List = ({ places }) => {
    const classes = useStyles();

    const [type, setType] = useState('hotel');
    const [rating, setRating] = useState('');

    return (
        <div className={classes.container}>
            <Typography variant="h4">Restaurants, Hotels and Attractions near you.</Typography>
            <div className={classes.inputContainer}>
                <FormControl className={classes.formControl}>
                    <InputLabel>Type</InputLabel>
                    <Select value={type} onChange={(e) => setType(e.target.value)}>
                        <MenuItem value="restaurant">Restaurants</MenuItem>
                        <MenuItem value="hotel">Hotels</MenuItem>
                        <MenuItem value="attractions">Attractions</MenuItem>
                    </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel>Rarting</InputLabel>
                    <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                        <MenuItem value={0}>All</MenuItem>
                        <MenuItem value={3}>Above 3.0</MenuItem>
                        <MenuItem value={4}>Above 4.0</MenuItem>
                        <MenuItem value={4.5}>Above 4.5</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <Grid container space={3} className={classes.list}>
                {places?.map((place, i) => (
                    // console.log(`PLACE: ${JSON.stringify(i)}`)
                    <Grid item xs={12} key={i}>
                        <PlaceDetails place={place}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}
 
export default List;