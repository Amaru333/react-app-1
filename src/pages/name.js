import '../style/home.css';
import MainBG from '../images/main_bg.png'

function UserName(props) {
  return (
    <div className="UserName">
        <img className="main_img" src= {MainBG} />
        <h1 className="main_name">{props.Fname}<br />{props.Lname}</h1>
    </div>
  );
}

export default UserName;
