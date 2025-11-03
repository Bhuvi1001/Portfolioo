import { profile } from '../data/profile'
export default function Projects(){
  return (
    <div className="grid grid-3">
      {profile.projects.map((p,i)=>(
        <div key={i} className="card">
          <h3 style={{marginBottom:4}}>{p.name}</h3>
          <p className="small">{p.tech.join(' · ')}</p>
          <p>{p.description}</p>
          <p className="small"><strong>Outcome:</strong> {p.outcome}</p>
          <div className="hstack">
            {p.github !== "#" && <a className="badge" href={p.github} target="_blank">GitHub</a>}
            {p.demo !== "#" && <a className="badge" href={p.demo} target="_blank">Live Demo</a>}
          </div>
        </div>
      ))}
    </div>
  )
}
