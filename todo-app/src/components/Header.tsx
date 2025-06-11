import logo from '../assets/logo.svg';

const Header = () => {
  return (
    <header className="header-container">

        <a href="/" className="header-logo">
            <img src={logo} alt="Logo ICMC Jr" />
        </a>

        <nav className="header-nav">
            <a href="/">Home</a>
            <a href="/login">Login</a>
            <a href="/register">Register</a>
        </nav>

    </header>
  );
};

export default Header;