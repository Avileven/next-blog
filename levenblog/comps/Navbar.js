
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Leventhal's Blog</h1>
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/AboutMe"><a>About Me</a></Link>
       <Link href="/myblog/"><a>Ninja Listing</a></Link>
    </nav>
);
}
 
export default Navbar;