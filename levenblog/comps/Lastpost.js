import Link from 'next/link'
const LastPost= ({data}) => {
  
    const [last] =data.slice(-1);
    console.log(last.id);
    
    return (
      
        <div className="last-cat">
         <h1>Hot...</h1>   
        
        
         <Link href={'/myblog/' + last.id} >
             <a >
               <h3>{ last.title }</h3>
              
             </a>
           </Link>

      </div>
      
    
  );
}



 
export default LastPost;