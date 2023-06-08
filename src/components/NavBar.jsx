import { useState, useEffect } from "react";

export const NavBar = () => {
  const [Toggle, showMenu] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setIsDark(storedTheme === "dark-theme");
      document.body.classList.toggle(
        "dark-theme",
        storedTheme === "dark-theme"
      );
    }

    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    const newTheme = !isDark ? "dark-theme" : "light";
    setIsDark(newTheme === "dark-theme");
    document.body.classList.toggle("dark-theme", newTheme === "dark-theme");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <header className="header" id="header">
      <div className={scroll ? "scrolled" : ""}>
        <nav className="nav container">
          <a href="#" className="nav_logo">
            Polina
          </a>
          <div
            className={Toggle ? "nav_menu show-menu" : "nav_menu"}
            id="nav-menu"
          >
            <ul className="nav_list grid">
              <li className="nav_item">
                <a href="#home" className="nav_link">
                  <i className="uil uil-estate nav_icon" /> Home
                </a>
              </li>
              <li className="nav_item">
                <a href="#qualification" className="nav_link">
                  <i className="uil uil-user nav_icon" /> Qualification
                </a>
              </li>
              <li className="nav_item">
                <a href="#skills" className="nav_link">
                  <i className="uil uil-file-alt nav_icon" /> Skills
                </a>
              </li>
              <li className="nav_item">
                <a href="#services" className="nav_link">
                  <i className="uil uil-briefcase-alt nav_icon" /> Services
                </a>
              </li>
              <li className="nav_item">
                <a href="#portfolio" className="nav_link">
                  <i className="uil uil-scenery nav_icon" /> Portfolio
                </a>
              </li>
              <li className="nav_item">
                <a href="#contact" className="nav_link">
                  <i className="uil uil-message nav_icon" /> Contact me
                </a>
              </li>
            </ul>
            <i
              className="uil uil-times nav_close"
              id="nav-close"
              onClick={() => showMenu(!Toggle)}
            />
          </div>
          <div className="nav_btns">
            <i
              className={
                isDark
                  ? "uil uil-sun change-theme"
                  : "uil uil-moon change-theme"
              }
              onClick={handleClick}
            ></i>
            <div
              className="nav_toggle"
              id="nav-toggle"
              onClick={() => showMenu(!Toggle)}
            >
              <i className="uil uil-apps" />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
