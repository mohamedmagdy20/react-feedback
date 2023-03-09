import React, { useContext } from 'react'
import Card from './shared/Card'
import propTypes from 'prop-types'
import {FaTimes , FaEdit} from 'react-icons/fa'
import FeedbackContext from '../context/FeedbackContext'
// import Card from ''
const FeedbackItem = (prop) => {
  const {deleteFeedback , editFeedback} = useContext(FeedbackContext)

  return (
    <Card reverse={false}>
        <div className="num-display">{prop.item.rating}</div>
        <button onClick={()=>deleteFeedback(prop.item.id)}  className="close">
            <FaTimes color='purple'/>
        </button>
        <button className='edit' onClick={()=>editFeedback(prop.item)}>
          <FaEdit color='purple' />
        </button>
        <div className="text-display">
            {prop.item.text}
        </div>
    </Card>
  )
}

FeedbackItem.propTypes = {
    item:propTypes.object.isRequired
}

export default FeedbackItem
