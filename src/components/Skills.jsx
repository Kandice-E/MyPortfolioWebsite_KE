import './Skills.css'

function Skills({ data }) {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {data.skills.map((skillGroup, index) => (
            <div key={index} className="skill-group">
              <h3>{skillGroup.category}</h3>
              <div className="skill-list">
                {skillGroup.items.map((skill, i) => (
                  <span key={i} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
