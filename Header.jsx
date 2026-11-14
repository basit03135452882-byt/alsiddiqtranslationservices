import { useState } from 'react';
function Header({
  onHomeClick,
  onArabicClick,
  onQuranClick,
  onUrduClick,
  onJapaneseClick,
  onTranslationClick,
  onBlogClick,
  onInterpreterClick,
  onAboutClick,
  onContactClick
}) {

  const [menuOpen, setMenuOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setCoursesOpen(false);
    setServicesOpen(false);
  };

  const handleClick = (e, callback) => {
    e.preventDefault();
    closeMenu();
    callback?.();
  };

  return (
    <div className="all-main">

      {/* TOP BAR */}
      <div className="main-bar">

        <div className="top-info">
          <i className="fa-solid fa-clock"></i>
          <span>Mon - Sat 09AM - 06PM</span>
        </div>

        <div className="top-info">
          <i className="fa-solid fa-phone"></i>
          <a href="https://wa.me/923335026595"
             target="_blank" rel="noreferrer">
            +92-3335026595
          </a>
        </div>

        <div className="top-info location">
          <i className="fa-solid fa-location-dot"></i>
          <span>Aabpara Market, G-6/1, Islamabad.</span>
        </div>

      </div>

      {/* MAIN HEADER */}
      <header className="header-main">

        {/* LOGO */}
        <a
          href="/"
          className="brand-logo"
          onClick={(e) => handleClick(e, onHomeClick)}
        >
          <img src="/images/logo.png" alt="Al Siddiq Logo" />

          <div className="brand-text">
            <h2>Al Siddiq</h2>
            <span>TRANSLATION SERVICES</span>
          </div>
        </a>

        {/* NAVIGATION */}
        <nav className={`navigation ${menuOpen ? 'active' : ''}`}>

          <ul className="nav-menu">

            <li>
              <a href="/"
                onClick={(e) => handleClick(e, onHomeClick)}>
                Home
              </a>
            </li>

            {/* COURSES */}
            <li className={`dropdown ${coursesOpen ? 'open' : ''}`}>

              <button
                className="nav-dropdown-link"
                type="button"
                onClick={() => {
                  if (window.innerWidth <= 991) {
                    setCoursesOpen(!coursesOpen);
                    setServicesOpen(false);
                  } else {
                    window.location.href = '/courses';
                  }
                }}
              >
                Online Courses
                <i className="fa-solid fa-chevron-down"></i>
              </button>

              <ul className="submenu">

                <li>
                  <a href="/quran"
                    onClick={(e) => handleClick(e, onQuranClick)}>
                    Quran With Tajweed
                  </a>
                </li>

                <li>
                  <a href="/arabic"
                    onClick={(e) => handleClick(e, onArabicClick)}>
                    Languages Courses
                  </a>
                </li>

              </ul>
            </li>

            {/* SERVICES */}
            <li className={`dropdown ${servicesOpen ? 'open' : ''}`}>

              <button
                className="nav-dropdown-link"
                type="button"
                onClick={() => {
                  if (window.innerWidth <= 991) {
                    setServicesOpen(!servicesOpen);
                    setCoursesOpen(false);
                  } else {
                    window.location.href = '/services';
                  }
                }}
              >
                Services
                <i className="fa-solid fa-chevron-down"></i>
              </button>

              <ul className="submenu">

                <li>
                  <a href="/translation"
                    onClick={(e) => handleClick(e, onTranslationClick)}>
                    Translation Services
                  </a>
                </li>

                <li>
                  <a href="/interpreter"
                    onClick={(e) => handleClick(e, onInterpreterClick)}>
                    Interpreter Embassies
                  </a>
                </li>

              </ul>
            </li>

            <li>
              <a href="/blog"
                onClick={(e) => handleClick(e, onBlogClick)}>
                Blog
              </a>
            </li>

            <li>
              <a href="/about"
                onClick={(e) => handleClick(e, onAboutClick)}>
                About Us
              </a>
            </li>

            <li>
              <a href="/contact"
                onClick={(e) => handleClick(e, onContactClick)}>
                Contact Us
              </a>
            </li>

          </ul>

          {/* MOBILE APPLY */}
          <div className="mobile-apply">
            <button onClick={(e) => handleClick(e, onContactClick)}>
              <i className="fa-solid fa-paper-plane"></i>
              Apply Now
            </button>
          </div>

        </nav>

        {/* DESKTOP APPLY */}
        <div className="main-applay">
          <button onClick={onContactClick}>
            Apply Now
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          className={`mobile-menu-btn ${menuOpen ? 'menu-active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </header>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/923335026595"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-icon"
        aria-label="Contact on WhatsApp"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>

    </div>
  );
}

export default Header;
