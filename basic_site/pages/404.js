import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";


const ForOhFor = () => {

    const router = useRouter();


    // Only fire the function once
    // Not again if state changes
    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000);
    }, []);
    return (
        <div className="not-found">
            <h1>Oops...</h1>
            <h2>The page was not found</h2>
            <p>Go Back <Link href="/"><a>Homepage</a></Link></p>
        </div>
    );
}
 
export default ForOhFor;