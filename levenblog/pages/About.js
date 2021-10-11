import Image from 'next/image';
const About = () => {
    return (  
    <div className="about-me">

        <div className="about-img">
            <Image src="/develop.png" alt="avi pic"
            width={300} height={230} />
        </div>
        <div className="about-cont">
            <h1> Hi, My name is Avi Leventhal</h1>
             
            <h3> I am an experienced entrepreneur and gained a profound experience in product
                 management in the digital marketplace .
                For the last decade I have been working as a web developer and digital media expert.
                My Primary focus was on Website & social media planning and creation. Most
                of my implementation was based on  wordpress , but during the last 3 years I studied 
                react.js and learned its benefits. After I investigated a large variety of react based solutions, I am currently using next.js as a frontend
                and rest server or mongo-db/node.js in the backhand.
                In my free-time I enjoy playing tennis and on-line chess.
          

            </h3>
           
           
        </div>
       
        <div className="contact-img">
        <h3>avi@bmax.co.il  </h3>
            <Image src="/contact.png" alt="avi pic"
            width={200} height={160} />
        </div>

    </div> 
    );
}
 
export default About;