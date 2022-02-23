import { useState } from "react";
import "./App.css";
import { validateName } from "./Helper";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//command to add toasts
toast.configure();

const App = () => {
  const [name, setName] = useState("");
  const [num, setNum] = useState("");

  const onSubmitClick = (e) => {
    if (!validateName(name)) {
      e.preventDefault();
      //toast is added to show error
      toast("Enter Valid name");
      return;
    } else if (num.length < 10) {
      e.preventDefault();
      toast("Enter Valid Number");
    } else {
      alert(`Your Name is ${name} and Number is ${num}`);
    }
  };
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
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div id="emailHelp" class="form-text">
              We'll never share your credentials with anyone else.
            </div>
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
              value={num}
              onChange={(e) => setNum(e.target.value)}
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </header>
    </div>
  );
};

export default App;
