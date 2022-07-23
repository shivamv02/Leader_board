 import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
         <nav className="navbar">
             <h1>Leader Board</h1>
             <div className="links">
             <Link to="/">Home</Link>
             <Link to="/create">Add Member</Link>

             </div>
         </nav>  
      );
}
 
export default Navbar;