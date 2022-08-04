import Head from "next/head";
import styles from "../styles/Home.module.css";
import Grid  from "@mui/material/Grid";
import CssBaseline from '@mui/material/CssBaseline';

import Header from '../components/Header/header';
import List from '../components/List/list';
import Map from '../components/Map/map';


const Home = () => {
	return (
		<>
			<CssBaseline/>
			<Header/>
			<Grid container spacing={3}>
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