
   import Image from 'next/image';
   import Link from 'next/link';
   import LastPost from '../../comps/Lastpost';
   

   export const getStaticProps = async () => {
     const res = await fetch('https://my-json-server.typicode.com/Avileven/jsonend/blogs');
     const data = await res.json();
   
     return {
       props: { data }
     }
   }
   
   const Articles = ({ data }) => {
    
     return (
       <div className='blog-list'>
        <div className="blog-img"> 
         <Image src="/blog.png" alt="site logo" width={300} height={220} />
         </div>
         <h1>Articles</h1>
         {data.map(art => (
           <Link href={'/myblog/' + art.id} key={art.id}>
             <a >
               <h3>{ art.title }</h3>
             </a>
           </Link>
         ))}
         { data && <LastPost data={data}  /> }
       </div>
     );
   }
    
   export default Articles;