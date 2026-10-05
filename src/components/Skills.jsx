function Skills() {
  return (
    <section id="skills" className="section-padding">

      <div className="container">

        <div className="text-center mb-5">

          <p className="text-primary fw-bold">
            TECHNICAL SKILLS
          </p>

          <h2 className="display-6 fw-bold">
            My Skills
          </h2>

          <p className="text-secondary">
            Technologies and tools I have worked with.
          </p>

        </div>

        <div className="row g-4">

          <div className="col-md-6 col-lg-4">
            <div className="skill-card">
              <h4>Programming</h4>

              <p>
                Python, Java, C++, C#
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="skill-card">
              <h4>Frontend</h4>

              <p>
                HTML5, CSS3, JavaScript ES6+,
                React.js, Bootstrap
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="skill-card">
              <h4>Backend</h4>

              <p>
                Node.js, Express.js, REST APIs,
                ASP.NET Core, MVC, JWT
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="skill-card">
              <h4>Databases</h4>

              <p>
                MySQL, SQL Server, MongoDB,
                SQL Queries
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="skill-card">
              <h4>AI & Machine Learning</h4>

              <p>
                PyTorch, CNN, RNN, MFCC,
                Generative AI
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="skill-card">
              <h4>Tools</h4>

              <p>
                Git, GitHub, VS Code,
                Visual Studio, Postman, AWS
              </p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;