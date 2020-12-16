import './App.css';
import Navbar from './pages/navbar';
import UserName from './pages/name';
import Social from './pages/social_links';
import About from './pages/aboutInfo';
import SButton from './pages/SButton';

function Homepage() {
    const Fname="YOUR";
    const Lname="NAME";
    return (
      <div className="Homepage">
        <div className="FirstHalf">
          
          <UserName Fname={Fname} Lname={Lname}/>
          <Social />
        </div>
        <div className="SecondHalf">
          <div className="infoCards">
            <About image='responsive' title='Responsive Layout' info='I can help you make a nice and responsive layout for your website.'/>
            <About image='front_end' title='Front-End Development' info='With my experience of HTML, CSS and Javascript frameworks, I can build the website you’ve always dreamed of.'/>
            <About image='back_end' title='Back-End Development' info='Need to write or review back-end codes? I can do that for you too.'/>
          </div>
          <SButton value="Skills" />
        </div>
      </div>
    );
  }
  
  export default Homepage;