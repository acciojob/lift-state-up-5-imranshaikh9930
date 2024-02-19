import React, { useState } from 'react'

function Form({isLoggedIn,setIsLoggedIn}) {
    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");


    function handleSubmit(e){
        e.preventDefault();

        setIsLoggedIn(!isLoggedIn);

        alert("logged In");

    }
  return (
    <div>
        <form action="">
            <label htmlFor="">UserName:</label>
            <input type="text"  value={userName} onChange={e=>setUserName(e.target.value)} />
            <br />

            <label htmlFor="">Password:</label>
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)} /><br />
            <button onClick={handleSubmit} className="login">Login</button>
        </form>
    </div>
  )
}

export default Form