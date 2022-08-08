import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@mui/material';
import LocationOnOutlined from '@mui/icons-material/LocationOnOutlined';
import Rating from '@mui/material/Rating';

import useStyles from "./styles.js";

const Map = ({setCoordinates, setBounds, coordinates}) => {
    // Uses the JSZ Styling
    const classes = useStyles();

    // Used for dynaimc media queries in jsx
    const isMoble = useMediaQuery('(min-width: 600px)');


    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{key: 'AIzaSyC2QONcWinenD8hX9E72iCOYNm0BlWG8UE'}}
                defaultCenter={coordinates}
                defaultZoom={isMoble ? 12 : 8}
                center={coordinates}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={(e) => {
                    setCoordinates({lat: e.center.lat, lng: e.center.lng});
                    setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw});
                }}
                onChildClick={''}

            >
            </GoogleMapReact>
        </div>
    );
}
 
export default Map;