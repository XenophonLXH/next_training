import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/NavBar'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Xenophon - Home</title>
        <meta name="keywords" content="xenophon"/>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p class={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae dapibus ex. Cras tellus neque, fringilla quis pulvinar sed, luctus vel dui. Suspendisse ut mi vel tellus fermentum molestie vitae vitae libero. Duis tristique, massa ac congue tincidunt, dolor dui tempus ex, nec euismod purus ligula quis nunc. Aenean et convallis arcu. In vestibulum finibus dolor quis malesuada. Aliquam erat volutpat. Sed scelerisque tempus est quis posuere. Donec a nunc non ligula aliquet scelerisque. Duis commodo massa dui, non dictum ligula dapibus ut.
          Vestibulum enim justo, molestie at vulputate quis, consequat sit amet metus. Quisque fringilla augue id dolor mollis, et lobortis dolor commodo. Integer mollis interdum lorem, quis placerat mauris auctor a. Vivamus lacinia fringilla dui ornare sollicitudin. Nulla vestibulum, erat a cursus posuere, urna massa dignissim nisi, quis ultrices lectus leo at purus. Phasellus egestas semper dolor, sit amet tincidunt massa cursus id. Integer consequat ullamcorper quam et elementum. Vestibulum quis posuere diam. Mauris porta pharetra lectus porta rutrum. Phasellus diam urna, faucibus ac ultricies vitae, laoreet ut velit. Fusce bibendum nibh a mi aliquam tincidunt. Donec cursus ut enim a finibus. Praesent et viverra turpis. Integer posuere lobortis lacinia. Donec consectetur condimentum nulla, non bibendum augue egestas at. Aenean convallis diam massa, in molestie risus suscipit et.
        </p>
        <p class={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae dapibus ex. Cras tellus neque, fringilla quis pulvinar sed, luctus vel dui. Suspendisse ut mi vel tellus fermentum molestie vitae vitae libero. Duis tristique, massa ac congue tincidunt, dolor dui tempus ex, nec euismod purus ligula quis nunc. Aenean et convallis arcu. In vestibulum finibus dolor quis malesuada. Aliquam erat volutpat. Sed scelerisque tempus est quis posuere. Donec a nunc non ligula aliquet scelerisque. Duis commodo massa dui, non dictum ligula dapibus ut.
          Vestibulum enim justo, molestie at vulputate quis, consequat sit amet metus. Quisque fringilla augue id dolor mollis, et lobortis dolor commodo. Integer mollis interdum lorem, quis placerat mauris auctor a. Vivamus lacinia fringilla dui ornare sollicitudin. Nulla vestibulum, erat a cursus posuere, urna massa dignissim nisi, quis ultrices lectus leo at purus. Phasellus egestas semper dolor, sit amet tincidunt massa cursus id. Integer consequat ullamcorper quam et elementum. Vestibulum quis posuere diam. Mauris porta pharetra lectus porta rutrum. Phasellus diam urna, faucibus ac ultricies vitae, laoreet ut velit. Fusce bibendum nibh a mi aliquam tincidunt. Donec cursus ut enim a finibus. Praesent et viverra turpis. Integer posuere lobortis lacinia. Donec consectetur condimentum nulla, non bibendum augue egestas at. Aenean convallis diam massa, in molestie risus suscipit et.
        </p>
        <Link href="/integrations"><a className={styles.btn}>List Integrations</a></Link>
      </div>
    </>
  )
}
