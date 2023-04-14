import { Link } from "react-router-dom/cjs/react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>React Meetups</h1>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/favorite">Favorites</Link>
          </li>
          <li>
            <Link to="/new">New Meetups</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
