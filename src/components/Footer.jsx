const Footer = () => {
  return (
    <nav className="footer">
      <section className="informationContainer">
        <div className="info">
          <p>
            This website has been developed to simulate a hotel front-end web
            application
          </p>
          <p>HTML, ReactJS and CSS were used.</p>
        </div>
        <div className="vLine"></div>
        <div className="contact">
          <p>Developed by: Fellipe Fontanez</p>
          <p className="phone">+55 (11) 98445-3051</p>
        </div>
      </section>
      <div className="social">
        <span className="socialTitle">
          Social media links <div className="horizontalLine"></div>
        </span>
        <div className="ig">
          <a
            href="https://www.instagram.com/fellipefontanez"
            target="_blank"
          >
            <img
              height="32"
              width="32"
              src="https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/instagram.svg"
              className="svg-icon"
            />
          </a>
          <a
            className="socialText"
            href="https://www.instagram.com/fellipefontanez"
            target="_blank"
          >
            @fellipefontanez
          </a>
        </div>
        <div className="git">
          <a
            href="https://www.github.com/fellipefontanez"
            target="_blank"
          >
            <img
              height="32"
              width="32"
              src="https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/github.svg"
              className="svg-icon"
            />
          </a>
          <a
            className="socialText"
            href="https://www.github.com/fellipefontanez"
            target="_blank"
          >
            Fellipe Fontanez
          </a>
        </div>
        <div className="linkedin">
          <a
            href="https://www.linkedin.com/in/fellipefontanez"
            target="_blank"
          >
            <img
              height="32"
              width="32"
              src="https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/linkedin.svg"
              className="svg-icon"
            />
          </a>
          <a
            className="socialText"
            href="https://www.linkedin.com/in/fellipefontanez"
            target="_blank"
          >
            Fellipe Fontanez
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
