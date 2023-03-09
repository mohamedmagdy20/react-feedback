// import FeedbackItem from "./component/FeedbackItem"
import Header from "./component/Header"
import { BrowserRouter,Routes ,Route} from 'react-router-dom';

import FeedbackList from "./component/FeedbackList"
import FeedbackStats from "./component/FeedbackStats"
import FeedbackForm from "./component/FeedbackForm"
import AboutPage from "./pages/AboutPage"
import { FeedbackProvider } from "./context/FeedbackContext";
import AboutIconLink from './component/AboutIconLink'
function App(){
    

   
    return(
        <FeedbackProvider>
            <BrowserRouter>
            <>
                <Header />

                <div className="container">
                    <Routes>
                        <Route path="/" exact element={
                            <>
                                <FeedbackForm/>
                                <FeedbackStats />
                                <FeedbackList />
                        
                            </>
                        }>

                        </Route>

                        <Route path='/about' element={<AboutPage/>}/>
                    </Routes>
                    <AboutIconLink/>
                    
                     {/* <AboutPage/> */}
                </div>
            </>
            </BrowserRouter>

        </FeedbackProvider>


    )
}

export default App