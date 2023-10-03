import { Link } from "react-router-dom";
import Logo from "../assets/icon/logo.png";
import classes from "./nav.module.css";

function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg px-5 py-3">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img className={classes.logo} src={Logo} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className={`nav-item px-2 ${classes.action} `}>
                <Link className="nav-link text-black fw-semibold" to="/">
                  HOME
                </Link>
              </li>
              <li className={`nav-item px-2 ${classes.action} `}>
                <Link className="nav-link text-black fw-semibold" to="/student">
                  {" "}
                  STUDENTS{" "}
                </Link>
              </li>
              <li className={`nav-item px-2 ${classes.action} `}>
                <Link
                  className="nav-link text-black fw-semibold"
                  to="/teachers"
                >
                  {" "}
                  TEACHERS{" "}
                </Link>
              </li>
              <li
                className={`nav-item dropdown px-2 ${classes.action} text-black fw-semibold`}
              >
                <a
                  className="nav-link dropdown-toggle text-black"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {" "}
                  ACTIVITIES{" "}
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Routing
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      {" "}
                      SYLLABUS{" "}
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      {" "}
                      MISC{" "}
                    </a>
                  </li>
                </ul>
              </li>
              <li className={`nav-item px-2 ${classes.action} `}>
                <Link className="nav-link text-black fw-semibold" to="/news">
                  NEWS
                </Link>
              </li>
              <li className={`nav-item px-2 ${classes.action} `}>
                <Link className="nav-link text-black fw-semibold" to="/about">
                  ABOUT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
