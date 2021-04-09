import React from "react";

const Navbar = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <nav className="navbar navbar-expand-lg navbar-light">
        <a id="Features" class="nav-link" href="/#">
          <img
            src="https://pbs.twimg.com/media/DyWXd86UwAAsLM-.png:large"
            width="50"
            height="50"
            alt="gumlogo"
          />
        </a>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a id="About" class="nav-link" href="/#">
                Widgets <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a id="University" class="nav-link" href="/#">
                University
              </a>
            </li>
            <li class="nav-item">
              <a id="Features" class="nav-link" href="/#">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a id="Pricing" class="nav-link" href="/#">
                Pricing
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
