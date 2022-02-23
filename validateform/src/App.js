import { useState } from "react";
import "./App.css";
import { validateEmail } from "./validate";


const App = () => {
  const [email, setEmail] =useState('')
  const [number, setNumber] =useState('')

  const onSubmitClick=(e) => {
    if(!validateEmail(email)) {
      e.preventDefault()
      alert("please Enter valid Email")
      return
    }
    if(number.length < 10){
      e.preventDefault()
      alert("eneter valid password")
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={onSubmitClick}>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Enter Your Full Name
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your Name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Enter Your Number
            </label>
            <input
              type="number"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          
          <button type="submit" class="btn btn-success">
            Submit
          </button>
        </form>
      </header>
    </div>
  );
};

export default App;
