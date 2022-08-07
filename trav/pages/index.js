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

	// Function to fetch
	// the places when a variable changes
	useEffect(() => {
		getPlaces().then((data) => {
			console.log(`Fetched Data ${data}`)
			setPlaces(data);
		})
	}, []);

	return (
		<>
			<CssBaseline/>
			<Header/>
			<Grid container spacing={2} style={{ width: '100%', height: '90vh'}}>
				<Grid item xs={12} md={4}>
					<List/>
				</Grid>
				<Grid item xs={12} md={4}>
					<Map/>
				</Grid>
			</Grid>
		</>
		// <div className={styles.container}>
		// 	<Head>
		//  	<title>Create Next App</title>
		// 		<link rel="icon" href="/favicon.ico" />
		// 	</Head>

		// 	<main className={styles.main}>
		// 		<h1 className={styles.title}>
		// 			Welcome to <a href="https://nextjs.org">
		// 				Next.js!</a> integrated with{" "}
		// 			<a href="https://mui.com/">Material-UI!</a>
		// 		</h1>
		// 		<p className={styles.description}>
		// 			Get started by editing{" "}
		// 			<code className={styles.code}>
		// 				pages/index.js</code>
		// 		</p>

		// 	</main>
		// </div>
	);
}

export default Home;