import Link from 'next/link'
import Image from 'next/image';

const Navbar = () => {
    return (
        <nav>
            <div className='logo' style={{borderRadius: '50%', overflow: 'hidden'}}>
                <Image src="/profile.jpg" objectFit='cover'  width={128} height={128}/>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="integrations"><a>Integrations</a></Link>
        </nav>
    );
}
 
export default Navbar;