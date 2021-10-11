import Head from 'next/head';
import Image from 'next/image';
import Homepost from '../comps/Homepost'



import Link from 'next/link';


export const getStaticProps = async () => {
  const res = await fetch('https://my-json-server.typicode.com/Avileven/jsonend/blogs');
  const data = await res.json();

  return {
    props: { data }
  }
}

const Home = ({ data }) => {
 
  return (
    <>
    <Head>
      <title>Leventhal's blog | Home</title>
      <meta name="keywords" content="leventhal"/>
    </Head>
   <div className="home"> 
    <h1>Hey, welcome to my blog:)</h1>
      <div className="home-cont">
    
      <h2>My name is Avi Leventhal. I'm a Web Developer and Digital
         Media expert.
      </h2>
      <Image src="/avi5.png" alt="avi pic" width={400} height={300} />  
     </div>   
     
      
   </div>
    { data && <Homepost data={data}  /> } 
    </>    
  
);
}

 
export default Home;




