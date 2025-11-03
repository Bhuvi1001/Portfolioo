import { profile } from '../data/profile'
export default function Contact(){
  return (
    <div className="card vstack">
      <h2>Contact</h2>
      <div><strong>Email:</strong> <a href={`mailto:${profile.email}`}>{profile.email}</a></div>
      <div><strong>Phone:</strong> <a href={`tel:${profile.phone}`}>{profile.phone}</a></div>
      <div><strong>LinkedIn:</strong> <a href={profile.linkedin} target="_blank">{profile.linkedin}</a></div>
      <p className="small">Tip: Press <kbd>g</kbd> then <kbd>p</kbd> to view Projects.</p>
      <script dangerouslySetInnerHTML={{__html:`
        document.addEventListener('keydown', (e)=>{
          if(e.key==='g'){ window.__g=true; setTimeout(()=>window.__g=false,1000) }
          if(window.__g && e.key==='p'){ window.location.href='/projects' }
        })
      `}} />
    </div>
  )
}
