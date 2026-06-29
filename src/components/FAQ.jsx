import { useState } from 'react'
import { faqs } from '../data/staticData'

function FaqItem({ faq, isOpen, onToggle }) {
  const renderAnswer = () => {
    if (faq.list) {
      return (
        <ol className="faq__list">
          {faq.answer.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      )
    }
    if (faq.phases) {
      return (
        <div>
          <p>Our selection process takes place in two phases.</p>
          {faq.phases.map((phase) => (
            <div key={phase.title}>
              <strong>{phase.title}</strong>
              <ol>
                {phase.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      )
    }
    if (faq.email) {
      return (
        <p>
          Drop an email at <span className="faq__email">{faq.email}</span>
        </p>
      )
    }
    return <p>{faq.answer}</p>
  }

  return (
    <div className={`faq__item ${isOpen ? 'open' : ''}`}>
      <button type="button" className="faq__question" onClick={onToggle}>
        {faq.question}
        <span className="faq__icon">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && <div className="faq__answer">{renderAnswer()}</div>}
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="faq">
      <div className="container">
        <h2 className="section-heading text-gold text-center">Frequently Asked Questions</h2>
        <div className="faq__list-wrap">
          {faqs.map((faq, i) => (
            <FaqItem
              key={faq.question}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
