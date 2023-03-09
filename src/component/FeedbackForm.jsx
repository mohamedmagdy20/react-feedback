import React, { useState , useContext , useEffect } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import Button from './Button'
import RatingSelect from './RatingSelect'
import Card from './shared/Card'

// FeedbackContext
// useState
export default function FeedbackForm(prop) {
    const {addFeedback , feedbackEdit, updateFeedback} = useContext(FeedbackContext)
    const [text ,setText] = useState('')
    const [btnDisabled ,setbtnDisabled] = useState(true)
    const [rating , setRating] = useState(10)
    const [message, setMessage]  = useState('')

    // const
    useEffect(()=>{
        // console.log('Hello');
        if(feedbackEdit.edit === true)
        {
            setbtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    },[feedbackEdit]) 
    const handleTextChange = (e)=>{
        // text = 
        if(text === '')
        {
            setbtnDisabled(true)
            setMessage(null)
        }else if(text !== '' && text.trim().length <= 10){
            setMessage('Text Must Be At least 10 Character')
            setbtnDisabled(true)
        }else{
            setbtnDisabled(false)
            setMessage(null)

        }
        setText(e.target.value)
        // console.log();
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        const newFeedback = {
            text:text,
            rating:rating
        }
        if(feedbackEdit.edit === true)
        {
            updateFeedback(feedbackEdit.item.id, newFeedback)
        }else{
            addFeedback(newFeedback)
        }
        // console.log(prop.handleAdd);
        setText('')
        // setRating
    }
    return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How Would you rate your service with us ?</h2>
            <RatingSelect select={(rating)=>setRating(rating)}/>
            <div className="input-group">
                <input onChange={handleTextChange} type="text" value={text} placeholder='Write A Review' />
                <Button type='submit' isDisabled={btnDisabled} >
                    Send
                </Button>
            </div>
            {message && <div className='message'>{message}</div>}
        </form>   
    </Card>
  )
}
