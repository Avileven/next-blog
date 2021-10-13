import Image from 'next/image';
const Coding = () => {
    return (  
    <div className="coding">

        <div className="coding-img">
            <Image src="/coding1.png" alt="avi pic"
            width={300} height={300} />
        </div>
        <div className="coding-cont">
            <h1> The site has been created by Next.js.
           </h1>
             
            <h3> After I tested out several solutions, I came to the conclusion that next.js
                 really scales up the coding experience for react.js environment.   
                 In addition to next’s advanced rendering solution, it makes the process of building
                 the site pages more rapid and structured.  I spend most of my time on the
                  functionality of the site and “neglect” the design efforts. 

 
            </h3>
               

           
            <h3><a href="https://github.com/Avileven/next-blog/">The code source could be find in my 
            GitHub repo  </a></h3>

            <h3><a href="https://my-json-server.typicode.com/Avileven/jsonend/blogs/">For the endpoint ,
             i used a  json file hosted at my-json-server 
            </a></h3>
           
           
        </div>
       
        

    </div> 
    );
}
 
export default Coding;