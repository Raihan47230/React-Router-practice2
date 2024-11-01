import { Link } from "react-router-dom";

const Header = () => {
     return (
          <div>
               <nav className="flex gap-12 justify-center mt-24">
                    <Link className="bg-yellow-200 px-4 py-2 rounded-lg" to={'/'}>Home</Link>
                    <Link className="bg-yellow-200 px-4 py-2 rounded-lg" to={'/about'}>About</Link>
                    <Link className="bg-yellow-200 px-4 py-2 rounded-lg" to={'/contact'}>Contact</Link>
               </nav>
          </div>
     );
};

export default Header;