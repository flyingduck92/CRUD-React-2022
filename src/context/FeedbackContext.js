import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import FeedbackData from '../data/FeedbackData'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData)

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })

  /*
    const [feedback, setFeedback] = useState([
      {
        id: 1,
        text: 'Hello from Context',
        rating: 10
      },
      {
        id: 2,
        text: 'Hello from Context 2',
        rating: 5
      },
      {
        id: 3,
        text: 'Hello from Context 3',
        rating: 8
      }
    ])
  */

  // Add
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback]);
  }

  // Delete
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure?')) {
      setFeedback(feedback.filter(item => item.id !== id))
    }
  }

  // Set Item to be Updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true
    })
  }

  // Update Feedback Item
  const updateFeedback = (id, updatedItem) => {
    setFeedback(feedback.map(item => item.id === id ? { ...item, ...updatedItem } : item))
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext