import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@mui/material';
import LocationOnOutlined from '@mui/icons-material/LocationOnOutlined';
import Rating from '@mui/material/Rating';

import useStyles from "./styles.js";

const Map = () => {
    // Uses the JSZ Styling
    const classes = useStyles();

    // Used for dynaimc media queries in jsx
    const isMoble = useMediaQuery('(min-width: 600px)');

    const cooridnates = {lat: 0, lng: 0};

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyC2QONcWinenD8hX9E72iCOYNm0BlWG8UE'}}
                defaultCenter={cooridnates}
                defaultZoom={isMoble ? 12 : 8}
                center={cooridnates}
                margin={[50, 50, 50, 50]}
                options={''}
                onClick={''}
                onChildClick={''}

            >
            </GoogleMapReact>
        </div>
    );
}
 
export default Map;