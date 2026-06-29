import { useState } from 'react'
import { useMentors } from '../hooks/useApiData'
import PhotoPlaceholder from './PhotoPlaceholder'

function MentorCard({ mentor }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="person-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="person-card__image">
        <PhotoPlaceholder label="Photo goes here" />
      </div>
      <div className="person-card__info">
        <h3>{mentor.name}</h3>
        <span>{mentor.designation}</span>
      </div>
      {hovered && (
        <div className="person-card__overlay">
          <h3>{mentor.name}</h3>
          <span>{mentor.designation}</span>
          <p>{mentor.description}</p>
        </div>
      )}
    </div>
  )
}

export default function Mentors() {
  const { mentors, loading } = useMentors()

  return (
    <section className="people-section">
      <div className="container">
        <h2 className="section-heading text-secondary text-center">Meet our mentors</h2>
        <p className="section-subtitle text-center">
          The industry experts shaping the student partners to learn, lead and grow.
        </p>

        {loading ? (
          <div className="skeleton-grid">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="skeleton-card" />
            ))}
          </div>
        ) : (
          <div className="people-grid">
            {mentors.map((mentor) => (
              <MentorCard key={mentor.name} mentor={mentor} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
