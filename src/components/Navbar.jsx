function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg professional-navbar sticky-top">
      <div className="container">

        {/* Mobile Menu Button */}
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Buttons */}
        <div className="collapse navbar-collapse" id="navbarNav">

          <div className="navbar-nav mx-auto gap-2 py-3 py-lg-0">

            <a className="nav-btn active" href="#home">
              Home
            </a>

            <a className="nav-btn" href="#about">
              About
            </a>

            <a className="nav-btn" href="#skills">
              Skills
            </a>

            <a className="nav-btn" href="#education">
              Education
            </a>

            <a className="nav-btn" href="#experience">
              Experience
            </a>

            <a className="nav-btn" href="#projects">
              Projects
            </a>

            <a className="nav-btn" href="#certifications">
              Certifications
            </a>

            <a className="nav-btn contact-btn" href="#contact">
              Contact
            </a>

          </div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;