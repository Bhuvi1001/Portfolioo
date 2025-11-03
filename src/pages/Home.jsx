import { profile } from '../data/profile'
export default function Home(){
  return (
    <section className="hero card">
      <h1>{profile.name}</h1>
      <p className="small">{profile.title} · {profile.location}</p>
      <p style={{maxWidth:800, margin:'16px auto 0'}}>{profile.summary}</p>
      <div className="hstack" style={{justifyContent:'center', marginTop:16}}>
        <a className="badge" href={profile.linkedin} target="_blank">LinkedIn</a>
        <a className="badge" href="https://github.com/" target="_blank">GitHub</a>
        <a className="badge" href={`mailto:${profile.email}`}>Email</a>

      </div>
    </section>
  )
}
