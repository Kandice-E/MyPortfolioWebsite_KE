import './About.css'

function About({ data }) {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <p>{data.about}</p>
          {data.education && (
            <div className="education-section">
              <h3>Education</h3>
              <div className="education-list">
                {data.education.map((edu, index) => (
                  <div key={index} className="education-item">
                    <div className="education-header">
                      <h4>{edu.degree}</h4>
                      <span className="graduation-year">{edu.year}</span>
                    </div>
                    <p className="school">{edu.school}</p>
                    {edu.details && <p className="details">{edu.details}</p>}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default About
