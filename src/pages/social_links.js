import '../style/home.css';
import FacebookIco from '../images/fb.png'
import GithubIco from '../images/github.png'
import DiscordIco from '../images/discord.png'

function Social() {
  return (
    <div className="Social">
        <a href="#"><img src={FacebookIco} /></a>
        <a href="#"><img src={GithubIco} /></a>
        <a href="#"><img src={DiscordIco} /></a>
    </div>
  );
}

export default Social;