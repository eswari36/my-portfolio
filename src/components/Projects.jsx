function Projects() {
  return (
    <section id="projects" className="section-padding bg-light">

      <div className="container">

        <div className="text-center mb-5">

          <p className="text-primary fw-bold">
            MY WORK
          </p>

          <h2 className="display-6 fw-bold">
            Projects
          </h2>

        </div>

        <div className="row g-4">

          <div className="col-lg-4">

            <div className="card project-card h-100 border-0 shadow-sm">

              <div className="card-body p-4">

                <h3 className="text-primary">
                  Speech Emotion Recognition
                </h3>

                <p className="text-secondary">
                  An AI and machine learning project that
                  identifies human emotions from speech using
                  deep learning techniques.
                </p>

                <h6 className="fw-bold">
                  Technologies
                </h6>

                <p>
                  Python, PyTorch, CNN, RNN, MFCC
                </p>

                <h6 className="fw-bold">
                  Highlights
                </h6>

                <ul className="text-secondary">
                  <li>Speech signal processing</li>
                  <li>MFCC feature extraction</li>
                  <li>CNN and RNN models</li>
                  <li>85%+ accuracy</li>
                </ul>

              </div>

            </div>

          </div>

          <div className="col-lg-4">

            <div className="card project-card h-100 border-0 shadow-sm">

              <div className="card-body p-4">

                <h3 className="text-primary">
                  E-Commerce Web Application
                </h3>

                <p className="text-secondary">
                  A full-stack web application for managing
                  products, users, shopping carts and orders.
                </p>

                <h6 className="fw-bold">
                  Technologies
                </h6>

                <p>
                  React.js, Node.js, Express.js, MySQL
                </p>

                <h6 className="fw-bold">
                  Highlights
                </h6>

                <ul className="text-secondary">
                  <li>Product management</li>
                  <li>User management</li>
                  <li>Shopping cart</li>
                  <li>Order management</li>
                  <li>REST API integration</li>
                </ul>

              </div>

            </div>

          </div>

          <div className="col-lg-4">

            <div className="card project-card h-100 border-0 shadow-sm">

              <div className="card-body p-4">

                <h3 className="text-primary">
                  Student Management System
                </h3>

                <p className="text-secondary">
                  A web-based application for managing student
                  records using ASP.NET Core MVC.
                </p>

                <h6 className="fw-bold">
                  Technologies
                </h6>

                <p>
                  C#, ASP.NET Core, MVC, HTML, CSS, JavaScript
                </p>

                <h6 className="fw-bold">
                  Highlights
                </h6>

                <ul className="text-secondary">
                  <li>Student record management</li>
                  <li>CRUD operations</li>
                  <li>MVC architecture</li>
                  <li>Responsive interface</li>
                </ul>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;