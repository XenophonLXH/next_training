import Head from "next/head";
import styles from '../../styles/Integrations.module.css'
import Link from 'next/link';

export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    return {
        props: {
            users: data
        }
    };
}


const Integrations = ({ users }) => {
    return (
        <>
            <Head>
                <title>Xenophon - Integrations</title>
            </Head>
            <div>
                <h1>My Integrations</h1>

                {users.map(user => (
                    <Link href={`/integrations/${user.id}`} key={user.id}>
                        <a className={styles.single}>
                            <h3>
                                {user.name}
                            </h3>
                        </a>
                    </Link>
                ))}
            </div>
        </>
    );
}
 
export default Integrations;