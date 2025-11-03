import { profile } from '../data/profile'
export default function Skills(){
  const s = profile.skills
  return (
    <div className="grid grid-2">
      <div className="card"><h2>Programming</h2><div className="hstack">{s.programming.map((x,i)=><span key={i} className="badge">{x}</span>)}</div></div>
      <div className="card"><h2>Databases</h2><div className="hstack">{s.databases.map((x,i)=><span key={i} className="badge">{x}</span>)}</div></div>
      <div className="card"><h2>Libraries & Frameworks</h2><div className="hstack">{s.libraries.map((x,i)=><span key={i} className="badge">{x}</span>)}</div></div>
      <div className="card"><h2>Core Competencies</h2><div className="hstack">{s.competencies.map((x,i)=><span key={i} className="badge">{x}</span>)}</div></div>
      <div className="card"><h2>Tools & Platforms</h2><div className="hstack">{s.tools.map((x,i)=><span key={i} className="badge">{x}</span>)}</div></div>
      <div className="card"><h2>Soft Skills</h2><div className="hstack">{s.soft.map((x,i)=><span key={i} className="badge">{x}</span>)}</div></div>
    </div>
  )
}
