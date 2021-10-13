import Image from 'next/image'

export const getStaticPaths = async () => {
  const res = await fetch('https://my-json-server.typicode.com/Avileven/jsonend/blogs');
  const data = await res.json();

  // map data to an array of path objects with params (id)
  const paths = data.map(n => {
    return {
      params: { id: n.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}
// using the params data to the pages and re-build them
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('https://my-json-server.typicode.com/Avileven/jsonend/blogs/' + id);
  const data = await res.json();

  return {
    props: {  data }
  }
}
// create the template for the post page 
const Details = ({ data }) => {
  return (
    <div className="post-page" >
        <div className="cat-set">  <Image src="/category.png"  alt="avi pic" width={80} height={40} />
        <h2>{ data.cat }</h2>
        </div>        
       <div className="post-cont"> 
       <h1>{ data.title }</h1>
        {/* the src it structured to catch the img of an article from the json file  */}
       {data.img &&<Image src={`/${data.img}`}   alt="avi pic" width={600} height={430}/>}
       <h3>{ data.body }</h3>
       <h4>{`posted on ${data.date} by ${data.author}`}</h4>  
       </div> 
          
          
    </div>
  );
}

export default Details;