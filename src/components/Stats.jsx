import { useEffect, useRef, useState } from 'react'
import { stats } from '../data/staticData'

function StatItem({ icon, value, suffix, label, id }) {
  const ref = useRef(null)
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
          const duration = 1500
          const steps = 60
          const increment = value / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [value, started])

  return (
    <div className="stat-item" ref={ref} id={id}>
      <div className="stat-item__icon">
        <img src={icon} alt="" />
      </div>
      <div className="stat-item__content">
        <div className="stat-item__number">
          <span>{count}</span>
          {suffix && <span className="stat-item__suffix">{suffix}</span>}
        </div>
        <p>{label}</p>
      </div>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="stats">
      <div className="container">
        <h2 className="section-heading text-primary text-center">Building it, bit by bit</h2>
        <div className="stats__grid">
          {stats.map((stat) => (
            <StatItem key={stat.id} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
