import { highlights } from '../data/staticData'
import PhotoPlaceholder from './PhotoPlaceholder'

export default function Highlights() {
  return (
    <section className="highlights">
      <div className="container">
        <h2 className="section-heading text-accent text-center">Pixel-Perfect Highlights</h2>
        <p className="section-subtitle text-center">
          Some nostalgic memoREELs from the Student Partnership Program.
        </p>
        <div className="highlights__gallery">
          {highlights.map((item, i) => (
            <div key={i} className={`highlights__item ${item.className}`}>
              <PhotoPlaceholder label="Photo goes here" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
