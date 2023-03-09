import { createContext , useState , useEffect } from "react";
import {v4 as uuidv4} from 'uuid'
import FeedbackData from "../data/feedbackdata";
// createContext
const FeedbackContext = createContext()

export  const FeedbackProvider =({children})=>{
    const [feedback , setFeedBack] = useState([])
    const [feedbackEdit , setFeedBackEdit] = useState({
        item:{},
        edit:false
    })
    useEffect(()=>{
        fetchFeedback()

    },[])
    const [isLoading,setIsLoading] = useState(true)

    const fetchFeedback = async ()=>{

        const respose =  await fetch(`http://localhost:5000/feedback`)
        const data = await respose.json()
        // console.log(data);
        setFeedBack(data)
        setIsLoading(false)
    }
    const updateFeedback = async (id , updateItem) =>{
        const respose = await fetch(`http://localhost:5000/feedback/${id}`,{
            method:'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(updateItem)
      
        })
        const data = await respose.json()
        setFeedBack(feedback.map((item)=> (item.id === id ? {
            ...item , data
        }: item)))
        // console.log(id,updateItem);
    }
    const deleteFeedback = async (id) =>{
        // console.log('App',id);.
        if(window.confirm('Are you sure you want to delete ??'))
        {
            await fetch(`http://localhost:5000/feedback/${id}`,{method:'DELETE'})
            // console.log(id);
            setFeedBack(feedback.filter((item)=>
                item.id !== id
            ))
        }
    }

    const editFeedback = (item)=>{
        setFeedBackEdit({
            item, 
            edit:true
        })
    }


    const addFeedback = async (newFeedback)=>{
        const res = await fetch('http://localhost:5000/feedback',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(newFeedback)
        })
        const data = await res.json()
        // newFeedback.id = uuidv4()
        // console.log(newFeedback);
        setFeedBack([data,...feedback])
    }

    return  <FeedbackContext.Provider value={{
        feedback:feedback,
        isLoading:isLoading,
        deleteFeedback:deleteFeedback,
        addFeedback:addFeedback,
        editFeedback:editFeedback,
        updateFeedback:updateFeedback,
        feedbackEdit
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext