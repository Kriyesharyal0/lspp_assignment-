import { resources } from '../data/staticData'

const Arrow = () => (
  <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9.73 4.35a.5.5 0 0 0 0-.71L6.55.46a.5.5 0 1 0-.71.71L8.67 4 5.84 6.83a.5.5 0 1 0 .71.71l3.18-3.18ZM0 4.5h9.38v-1H0v1Z"
      fill="currentColor"
    />
  </svg>
)

export default function Resources() {
  return (
    <section className="resources">
      <div className="container">
        <h2 className="section-heading text-indigo text-center">Resources</h2>
        <p className="section-subtitle text-center">
          Take a &apos;byte&apos; into what we cook - explore some great resources to get started.
        </p>
        <div className="resources__grid">
          {resources.map((r) => (
            <div key={r.title} className="resource-card">
              <img src={r.image} alt={r.title} />
              <div className={`resource-card__content resource-card__content--${r.color}`}>
                <h3>{r.title}</h3>
                <div>
                  <p>{r.subtitle}</p>
                  <Arrow />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
