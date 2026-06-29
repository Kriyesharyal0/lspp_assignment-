function PerkCard({ icon, title, items, variant, iconTheme }) {
  return (
    <div className={`perk-card perk-card--${variant}`}>
      <div className={`perk-card__icon ${iconTheme ? `perk-card__icon--${iconTheme}` : ''}`}>
        <img src={icon} alt="" />
      </div>
      <div className="perk-card__body">
        <h3 className="perk-card__title">{title}</h3>
        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Perks({ title, items, accent }) {
  return (
    <section className={`perks perks--${accent}`}>
      <div className="container">
        <h2 className={`section-heading text-${accent} text-center`}>{title}</h2>
        <div className="perks__grid">
          {items.map((perk) => (
            <PerkCard key={perk.title} {...perk} />
          ))}
        </div>
      </div>
    </section>
  )
}
