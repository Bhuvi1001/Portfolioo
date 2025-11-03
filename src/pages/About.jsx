import { profile } from '../data/profile'
export default function About(){
  return (
    <div className="grid grid-2">
      <div className="card">
        <h2>About</h2>
        <p>{profile.summary}</p>
      </div>
      <div className="card">
        <h2>Education</h2>
        <table className="table">
          <thead><tr><th>Institution</th><th>Program</th><th>Details</th></tr></thead>
          <tbody>
          {profile.education.map((e,idx)=>(
            <tr key={idx}>
              <td>{e.school}</td>
              <td>{e.program}</td>
              <td>{e.cgpa ? `CGPA: ${e.cgpa}` : e.score ? `Score: ${e.score}` : e.period}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
