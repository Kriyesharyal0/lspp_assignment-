import { useEffect, useState } from 'react'

const STRAPI = 'https://strapi.lftechnology.com'

export function useStudents() {
  const [years, setYears] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${STRAPI}/api/lspp-students?populate=students,students.photo`)
      .then((r) => r.json())
      .then((data) => {
        setYears(data.data.map((entry) => ({
          year: entry.attributes.year,
          students: entry.attributes.students.map((s) => ({
            name: s.name,
            college: s.college,
            description: s.description,
            photo: s.photo?.data?.attributes?.url
              ? `${STRAPI}${s.photo.data.attributes.url}`
              : null,
          })),
        })))
      })
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  return { years, loading }
}

export function useMentors() {
  const [mentors, setMentors] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${STRAPI}/api/mentors?populate=photo&sort=name:ASC`)
      .then((r) => r.json())
      .then((data) => {
        setMentors(
          data.data.map((m) => ({
            name: m.attributes.name,
            designation: m.attributes.designation,
            description: m.attributes.description,
            linkedinUrl: m.attributes.linkedinUrl,
            photo: m.attributes.photo?.data?.attributes?.url
              ? `${STRAPI}${m.attributes.photo.data.attributes.url}`
              : null,
          })),
        )
      })
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  return { mentors, loading }
}

export function useTestimonials() {
  const [testimonials, setTestimonials] = useState([])

  useEffect(() => {
    fetch(`${STRAPI}/api/lspp-testimonials?populate=photo&sort=batch:DESC`)
      .then((r) => r.json())
      .then((data) => {
        setTestimonials(
          data.data.map((t) => ({
            name: t.attributes.name,
            batch: t.attributes.batch,
            description: t.attributes.description,
            photo: t.attributes.photo?.data?.attributes?.url
              ? `${STRAPI}${t.attributes.photo.data.attributes.url}`
              : null,
          })),
        )
      })
      .catch(console.error)
  }, [])

  return { testimonials }
}

export function useApplyStatus() {
  const [applyLink, setApplyLink] = useState(null)

  useEffect(() => {
    fetch(`${STRAPI}/api/lspp-statuses/`)
      .then((r) => r.json())
      .then((data) => {
        const status = data.data[0]?.attributes
        if (status?.isOpen) setApplyLink(status.link)
      })
      .catch(console.error)
  }, [])

  return applyLink
}
