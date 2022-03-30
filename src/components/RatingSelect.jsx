import { useState, useContext, useEffect } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function RatingSelect({ select }) {
  const [selected, setSelected] = useState(10)

  const { feedbackEdit } = useContext(FeedbackContext)
  useEffect(() => {
    setSelected(feedbackEdit.item.rating)
  }, [feedbackEdit])

  const handleRating = (e) => {
    setSelected(+e.currentTarget.value)
    select(+e.currentTarget.value)
  }

  return (
    <ul className='rating'>
      {Array.from({ length: 10 }, (_, i) => (
        <li key={`num${i + 1}`}>
          <input
            type='radio'
            name='rating'
            id={`num${i + 1}`}
            value={i + 1}
            checked={selected === i + 1}
            onChange={handleRating}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  )
}
export default RatingSelect
