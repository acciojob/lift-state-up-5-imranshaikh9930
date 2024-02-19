
import React,{useState} from "react";
import './../styles/App.css';
import Form from "./Form";

const App = () => {

  const [isLoggedIn,setIsLoggedIn]  = useState(false);
  return (
    <div>
        {/* Do not remove the main div */}{

          !isLoggedIn &&  <Form  isLoggedIn={isLoggedIn} setIsLoggedIn ={setIsLoggedIn} />
     
        }
          <p> {isLoggedIn ? 'You are logged In' : ''}</p>
    </div>
  )
}

export default App
