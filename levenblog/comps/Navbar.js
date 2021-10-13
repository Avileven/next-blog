
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Leventhal's Blog</h1>
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/myblog/"><a>Blog</a></Link>
      <Link href="/Coding/"><a>Coding</a></Link>
      <Link href="/About"><a>About</a></Link>
      
    </nav>
);
}
 
export default Navbar;