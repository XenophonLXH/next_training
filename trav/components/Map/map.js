import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@mui/material';
import LocationOnOutlined from '@mui/icons-material/LocationOnOutlined';
import Rating from '@mui/material/Rating';
import { useState } from 'react';

import useStyles from "./styles.js";

const Map = ({setCoordinates, setBounds, coordinates, places}) => {
    // Uses the JSZ Styling
    const classes = useStyles();

    // Used for dynaimc media queries in jsx
    const isDesktop = useMediaQuery('(min-width:600px)');

    // Lifting the state up
    const [childClicked, setChildClicked] = useState(null);


    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyC2QONcWinenD8hX9E72iCOYNm0BlWG8UE'}}
                defaultCenter={coordinates}
                defaultZoom={14}
                center={coordinates}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={(e) => {
                    setCoordinates({lat: e.center.lat, lng: e.center.lng});
                    setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw});
                }}
                onChildClick={(child) => {
                    setChildClicked(child);
                }}
            >
                {places?.map((place, i) => (
                    <div
                        className={classes.markerContainer}
                        lat={Number(place.latitude)}
                        lng={Number(place.longitude)}
                        key={i}
                    >
                        {
                            !isDesktop ? (
                            <LocationOnOutlined color="primary" fontSize="large"/>
                        ) : (
                            <Paper elevation={3} className={classes.paper}>
                                <Typography gutterBottom variant="subtitle2" className={classes.typography}>
                                    {place.name}
                                </Typography>
                                <img className={classes.pointer} src={place.image ? place.photo.images.large.url: 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'} alt={place.name}/>
                                <Rating size="small" value={Number(place.rating)} readOnly/>
                            </Paper>
                        )}
                    </div>

                ))}
            </GoogleMapReact>
        </div>
    );
}
 
export default Map;