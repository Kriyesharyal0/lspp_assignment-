import PhotoPlaceholder from './PhotoPlaceholder'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__grid">
          <div className="hero__content">
            <img
              src="/assets/images/student-partnership-logo.svg"
              alt="Leapfrog Student Partnership Program"
              className="hero__logo"
            />
            <h1 className="hero__title">Learn, Lead and Grow</h1>
            <p className="hero__brief">
              Learn new and in-demand skills, grow your network, and build your future in a
              career that interests you the most.
            </p>
            <span className="apply-now apply-now--static">Apply now →</span>
          </div>
          <div className="hero__image-wrap">
            <PhotoPlaceholder label="Photo goes here" />
          </div>
        </div>
      </div>
    </section>
  )
}
