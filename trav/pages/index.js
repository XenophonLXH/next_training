import React, { useState, useEffect } from 'react';

import Head from "next/head";
import styles from "../styles/Home.module.css";
import Grid  from "@mui/material/Grid";
import CssBaseline from '@mui/material/CssBaseline';

import Header from '../components/Header/header';
import List from '../components/List/list';
import Map from '../components/Map/map';

import { getPlaces } from "./api";

const Home = () => {

	// Set State function
	// to maintain the places
	const [places, setPlaces] = useState([]);

	const [coordinates, setCoordinates] = useState({});
	const [bounds, setBounds] = useState({});

	const [type, setType] = useState('hotels');
    const [rating, setRating] = useState('');
	const [filteredPlaces, setFilteredPlaces] = useState({});

	// Pushed state into index
	const [childClick, setChildClicked] = useState(null);

	// Loading
	const [isLoading, setIsLoading] = useState(false);

	// Get users location
	useEffect(() => {
		navigator.geolocation.getCurrentPosition(({ coords: {latitude, longitude}}) => {
			setCoordinates({
				lat: latitude,
				lng: longitude
			});
		});
	}, []);

	// Function to fetch
	// the places when a variable changes
	useEffect(() => {
		setIsLoading(true);
		getPlaces(type, bounds.sw, bounds.ne).then((data) => {
			console.log(`Fetched Data ${JSON.stringify(data)}`)
			setPlaces(data);
			setFilteredPlaces([]);
			setIsLoading(false);
		})
	}, [type, coordinates, bounds]);


	// Executed when the rating changes
	useEffect(() => {
		const filteredPlaces = places.filter((place) => place.rating >= rating);
		setFilteredPlaces(places);
	}, [rating]);


	return (
		<>
			<CssBaseline/>
			<Header/>
			<Grid container spacing={2} style={{ width: '100%', height: '90vh'}}>
				<Grid item xs={12} md={4}>
					<List 
						places={filteredPlaces.length ? filteredPlaces : places}
						childClick={childClick}
						isLoading={isLoading}
						type={type}
						setType={setType}
						rating={rating}
						setRating={setRating}/>
				</Grid>
				<Grid item xs={12} md={4}>
					<Map
					setCoordinates={setCoordinates}
					setBounds={setBounds}
					coordinates={coordinates}
					places={filteredPlaces.length ? filteredPlaces : places}
					setChildClicked={setChildClicked}
					/>
				</Grid>
			</Grid>
		</>
	);
}

export default Home;