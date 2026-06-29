import { useState } from 'react'
import { useStudents } from '../hooks/useApiData'
import PhotoPlaceholder from './PhotoPlaceholder'

function StudentCard({ student }) {
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
        <h3>{student.name}</h3>
        <span>{student.college}</span>
      </div>
      {hovered && student.description && (
        <div className="person-card__overlay">
          <h3>{student.name}</h3>
          <p>{student.description}</p>
        </div>
      )}
    </div>
  )
}

function SkeletonGrid() {
  return (
    <div className="skeleton-grid">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="skeleton-card" />
      ))}
    </div>
  )
}

export default function StudentPartners() {
  const { years, loading } = useStudents()
  const [activeTab, setActiveTab] = useState(null)

  const currentTab = activeTab ?? (years.length ? years.length - 1 : 0)

  return (
    <section className="people-section">
      <div className="container">
        <h2 className="section-heading text-secondary text-center">Meet the Student Partners</h2>
        <p className="section-subtitle text-center">Get to know our future leaders!</p>

        {!loading && years.length > 0 && (
          <div className="tabs">
            {years.map((y, i) => (
              <button
                key={y.year}
                type="button"
                className={`tab ${currentTab === i ? 'active' : ''}`}
                onClick={() => setActiveTab(i)}
              >
                {y.year}
              </button>
            ))}
          </div>
        )}

        {loading ? (
          <SkeletonGrid />
        ) : (
          years.map((y, i) => (
            <div key={y.year} className="people-grid" style={{ display: currentTab === i ? 'grid' : 'none' }}>
              {y.students.map((student) => (
                <StudentCard key={student.name} student={student} />
              ))}
            </div>
          ))
        )}
      </div>
    </section>
  )
}
