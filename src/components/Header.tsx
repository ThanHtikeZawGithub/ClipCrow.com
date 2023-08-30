import logo from '../assets/nav_title.svg';
import '../styles/app.scss';

const Header = () => {
  return (
    <nav className="nav">
    <a className="nav__title">
      <img src={logo} alt="essential workware" />
    </a>
  </nav>
  )
}

export default Header