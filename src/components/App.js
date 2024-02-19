
import React,{useState} from "react";
import './../styles/App.css';
import Form from "./Form";

const App = () => {

  const [isLoggedIn,setIsLoggedIn]  = useState(false);
  return (
    <div>
        {/* Do not remove the main div */}
        
        <h1>Parent Component</h1>
        
        {
          
          !isLoggedIn &&  <Form  isLoggedIn={isLoggedIn} setIsLoggedIn ={setIsLoggedIn} />
     
        }
          <p> {isLoggedIn ? 'You are logged In' : ''}</p>
    </div>
  )
}

export default App
