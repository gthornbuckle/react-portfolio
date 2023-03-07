import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                    < a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    </a>
                <div className="dropdown-menu">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                </div>
                </li>
            </ul>
        </div>
    </nav>

    // <ul className="nav nav-tabs">
    //   <li className="nav-item">
    //     <NavLink
    //       to="/"
    //       end
    //       className={({ isActive }) =>
    //         isActive ? 'nav-link active' : 'nav-link'
    //       }
    //     >
    //       Home
    //     </NavLink>
    //   </li>
    //   <li className="nav-item">
    //     <NavLink
    //       to="about"
    //       className={({ isActive }) =>
    //         isActive ? 'nav-link active' : 'nav-link'
    //       }
    //     >
    //       About
    //     </NavLink>
    //   </li>
    //   <li className="nav-item">
    //     <NavLink
    //       to="blog"
    //       className={({ isActive }) =>
    //         isActive ? 'nav-link active' : 'nav-link'
    //       }
    //     >
    //       Blog
    //     </NavLink>
    //   </li>
    //   <li className="nav-item">
    //     <NavLink
    //       to="contact"
    //       end
    //       className={({ isActive }) =>
    //         isActive ? 'nav-link active' : 'nav-link'
    //       }
    //     >
    //       Contact
    //     </NavLink>
    //   </li>
    //   <li className="nav-item">
    //     <NavLink
    //       to="contact/learn"
    //       className={({ isActive }) =>
    //         isActive ? 'nav-link active' : 'nav-link'
    //       }
    //     >
    //       Learn
    //     </NavLink>
    //   </li>
    // </ul>
  );
}

export default Navbar;
