function Certifications() {

  const certifications = [
    "Microsoft & EY AI Skills Passport",
    "IBM SkillsBuild — Use Generative AI for Software Development",
    "AWS / Amazon Bedrock / Nova Training",
    "OpenAI Academy + NxtWave Generative AI Mastery Workshop",
    "Mahindra Pride Employability Skills Training"
  ]

  return (
    <section id="certifications" className="section-padding bg-light">

      <div className="container">

        <h2 className="section-title">Certifications</h2>

        <div className="row">

          {certifications.map((certificate, index) => (

            <div className="col-md-6 mb-3" key={index}>

              <div className="card shadow-sm">

                <div className="card-body">

                  <h5>
                    {certificate}
                  </h5>

                  <button className="btn btn-outline-primary">
                    View Certificate
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}

export default Certifications