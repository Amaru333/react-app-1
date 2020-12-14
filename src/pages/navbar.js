import '../style/home.css';

function Navbar() {
  return (
    <div className="Navbar">
      <nav class="navigation">
        <ul class="nav-links">
          <li><a class="navlink" href="#">Home</a></li>
          <li><a class="navlink" href="#">Skills</a></li>
          <li><a class="navlink" href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
