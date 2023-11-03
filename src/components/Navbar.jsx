import Logo from "./Logo";
import classes from './Navbar.module.css'
function Navbar({ children }) {
  return (
    <nav className={classes.navbar}>
      <Logo />
      {children}
    </nav>
  );
}

export default Navbar;
