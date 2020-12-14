import './App.css';
import Navbar from './pages/navbar';
import UserName from './pages/name';
import Social from './pages/social_links';

function App() {
  const Fname="Your";
  const Lname="Name";
  return (
    <div className="App">
      <Navbar />
      <UserName Fname={Fname} Lname={Lname}/>
      <Social />
    </div>
  );
}

export default App;
