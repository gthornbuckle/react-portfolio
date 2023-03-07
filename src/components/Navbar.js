import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
            <a className="navbar-brand" href="#top">George Hornbuckle</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <NavLink
                            to="/"
                            end
                            className={({ isActive }) =>
                                isActive ? 'nav-link active' : 'nav-link'
                            }
                            >
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="projects"
                            end
                            className={({ isActive }) =>
                                isActive ? 'nav-link active' : 'nav-link'
                            }
                            >
                            Projects
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="contact"
                            end
                            className={({ isActive }) =>
                                isActive ? 'nav-link active' : 'nav-link'
                            }
                            >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

  );
}

export default Navbar;
