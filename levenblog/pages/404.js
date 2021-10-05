import Link from 'next/link'
import Image from 'next/image'

const NotFound = () => {
  return (
    <div className="lost-page">
       
        <Image src="/eror.png" alt="site logo" width={300} height={130} />
      <h1>Sorry</h1>
      <h2>you are lost....  :)</h2>
      <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
    </div>
  );
}
 
export default NotFound;