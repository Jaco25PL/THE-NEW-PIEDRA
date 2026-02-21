import { useState, useEffect, useRef } from 'react'
import styles from '../../../styles/Clients.module.css'
import { Titles } from '../../common/Titles/Titles'
import { ReviewCard } from './ClientCard'
import { customerReviews } from '../../../data/customerReviews'
import { SectionDivider } from '../../common/SectionDivider/SectionDivider'
import { GoogleRating } from '../../common/GoogleRating/GoogleRating'

const VISIBLE = 3
const INTERVAL = 10000
const FADE_MS = 500

export function Clients() {
  const [slots, setSlots] = useState([0, 1, 2])
  const [fadingSlot, setFadingSlot] = useState(null)
  const nextReviewRef = useRef(VISIBLE)
  const nextSlotRef = useRef(0)

  useEffect(() => {
    const timer = setInterval(() => {
      const slotToFade = nextSlotRef.current
      const nextReview = nextReviewRef.current % customerReviews.length

      setFadingSlot(slotToFade)

      setTimeout(() => {
        setSlots(prev => {
          const next = [...prev]
          next[slotToFade] = nextReview
          return next
        })
        setFadingSlot(null)
        nextReviewRef.current = (nextReviewRef.current + 1) % customerReviews.length
        nextSlotRef.current = (nextSlotRef.current + 1) % VISIBLE
      }, FADE_MS)
    }, INTERVAL)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className={styles.satisfiedCustomersContainer}>
      <SectionDivider position='top'/>
      <Titles title="CLIENTES SATISFECHOS"/>
      <a
        href="https://www.google.com/search?q=Piedra+Construcciones&ie=UTF-8#mpd=~13252831935698052680/customers/reviews&lrd=0x959f81b539eb72cf:0xd8c34054d85c5ad0,1,,,,"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GoogleRating />
      </a>
      <div className={styles.reviewsContainer}>
        {slots.map((reviewIndex, slotIndex) => (
          <a
            href="https://www.google.com/search?q=Piedra+Construcciones&ie=UTF-8#mpd=~13252831935698052680/customers/reviews&lrd=0x959f81b539eb72cf:0xd8c34054d85c5ad0,1,,,,"
            target="_blank"
            rel="noopener noreferrer"
            key={slotIndex}
            className={`${styles.cardSlot} ${fadingSlot === slotIndex ? styles.cardFading : ''}`}
          >
            <ReviewCard review={customerReviews[reviewIndex]} />
          </a>
        ))}
      </div>
      <SectionDivider position='bottom'/>
    </div>
  )
}
