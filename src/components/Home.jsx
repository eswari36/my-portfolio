function Home() {
  return (
    <section id="home" className="home-section">

      <div className="container">

        <div className="row align-items-center min-vh-100">

          <div className="col-lg-9">

            <p className="text-primary fw-bold fs-5">
              HELLO, I'M
            </p>

            <h1 className="display-3 fw-bold">
              Lokeswari Kambhampati
            </h1>

            <h2 className="text-primary fw-semibold mb-4">
              Software Engineer | Full Stack Developer
            </h2>

            <p className="lead text-secondary">
              2026 B.Tech Artificial Intelligence and Machine
              Learning graduate with a strong foundation in
              Python, Java, JavaScript, React.js, .NET and SQL.
            </p>

            <p className="text-secondary">
              I enjoy building responsive web applications,
              REST APIs and AI-powered solutions. I am currently
              looking for an opportunity to begin my career as
              a Software Developer.
            </p>

            {/* Main Buttons */}
            <div className="mt-4">

              <a
                href="#projects"
                className="btn btn-primary btn-lg me-3"
              >
                View My Projects
              </a>

              <a
                href="#contact"
                className="btn btn-outline-primary btn-lg"
              >
                Contact Me
              </a>

            </div>

            {/* Social Buttons */}
            <div className="mt-4">

              <a
                href="https://www.linkedin.com/in/lokeswari-kambhampati/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary me-2"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary"
              >
                GitHub
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Home;