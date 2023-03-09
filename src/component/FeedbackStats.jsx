import React, { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
// useContext
// FeedbackContext
export default function FeedbackStats() {
    const {feedback} = useContext(FeedbackContext)
    // CALC rATING aVG
    let average = feedback.reduce((acc,cur)=>{
        return acc+cur.rating
    },0)/feedback.length

    average = average.toFixed(1)
  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {isNaN(average) ? 0 : average} </h4>
    
    </div>
  )
}
