import Image from 'next/image'

const HomePost= ({data}) => {
  
    const [last] =data.slice(-1);
  

return (
      
<div className="home-data">
  <div className="home-title">
  <h1>Just added..</h1>  
  <h2>{last.title}</h2> 
  </div> 
  <div className="home-post">
  <h2>{last.body}</h2>   
  {last.img &&<Image src={`/${last.img}`}   alt="avi pic" width={300} height={230}/>}
  
 </div>
   
</div>

); }
export default HomePost;