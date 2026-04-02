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
        
        {data.repositories && (
          <div className="featured-repos">
            <h3>Featured Repositories</h3>
            <div className="repos-grid">
              {data.repositories.map((repo, index) => (
                <a
                  key={index}
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="repo-card"
                >
                  <div className="repo-header">
                    <h4>{repo.name}</h4>
                    {repo.stars > 0 && <span className="stars">⭐ {repo.stars}</span>}
                  </div>
                  <p>{repo.description}</p>
                  <span className="repo-link">View on GitHub →</span>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Skills
