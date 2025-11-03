import { profile } from '../data/profile'
export default function Achievements(){
  return (
    <div className="card">
      <h2>Certifications & Achievements</h2>
      <ul>
        {profile.achievements.map((a,i)=>(<li key={i} style={{margin:'8px 0'}}>{a}</li>))}
      </ul>
    </div>
  )
}
