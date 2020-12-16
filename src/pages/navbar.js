import '../style/home.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="Navbar">
      <nav class="navigation">
        <ul class="nav-links">
          <Link to="/" style={{textDecoration: 'none'}}>
            <li class="navlink">Home</li>
          </Link>
          <Link to="/skills">
            <li class="navlink">Skills</li>
          </Link>

          <Link to="/contact">
            <li class="navlink">Contact</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
