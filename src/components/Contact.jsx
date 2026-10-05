function Contact() {
  return (
    <section id="contact" className="section-padding">

      <div className="container">

        {/* Heading */}
        <div className="text-center mb-5">

          <p className="text-primary fw-bold">
            GET IN TOUCH
          </p>

          <h2 className="display-6 fw-bold">
            Contact Me
          </h2>

          <p className="text-secondary">
            I am open to entry-level Software Developer and
            Full Stack Developer opportunities.
          </p>

        </div>

        <div className="row g-4">

          {/* Contact Information */}
          <div className="col-lg-5">

            <div className="card border-0 shadow-sm h-100">

              <div className="card-body p-4">

                <h3 className="text-primary fw-bold mb-4">
                  Let's Connect
                </h3>

                <p className="text-secondary">
                  If you are looking for a motivated fresher
                  with skills in full-stack development,
                  Java, Python, React.js and AI/ML,
                  feel free to connect with me.
                </p>

                <div className="mt-4">

                  <div className="mb-4">
                    <h6 className="text-primary fw-bold">
                      Email
                    </h6>

                    <a
                      href="mailto:kambhampatilokeswari@gmail.com"
                      className="text-decoration-none text-dark"
                    >
                      kambhampatilokeswari@gmail.com
                    </a>
                  </div>
                  <div className="mb-4">
                    <h6 className="text-primary fw-bold">
                      Location
                    </h6>

                    <p className="text-secondary mb-0">
                      Andhra Pradesh, India
                    </p>
                  </div>

                </div>

                {/* Social Buttons */}
                <div className="mt-4">

                  <a
                    href="https://www.linkedin.com/in/lokeswari-kambhampati/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary me-2"
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

          {/* Contact Form */}
          <div className="col-lg-7">

            <div className="card border-0 shadow-sm">

              <div className="card-body p-4">

                <h3 className="text-primary fw-bold mb-4">
                  Send Me a Message
                </h3>

                <form>

                  <div className="row">

                    <div className="col-md-6 mb-3">

                      <label className="form-label fw-semibold">
                        Your Name
                      </label>

                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter your name"
                      />

                    </div>

                    <div className="col-md-6 mb-3">

                      <label className="form-label fw-semibold">
                        Your Email
                      </label>

                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                      />

                    </div>

                  </div>

                  <div className="mb-3">

                    <label className="form-label fw-semibold">
                      Subject
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter subject"
                    />

                  </div>

                  <div className="mb-3">

                    <label className="form-label fw-semibold">
                      Message
                    </label>

                    <textarea
                      className="form-control"
                      rows="6"
                      placeholder="Write your message..."
                    ></textarea>

                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary px-4"
                  >
                    Send Message
                  </button>

                </form>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;