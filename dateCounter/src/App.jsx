import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Header count={count} step={step} setCount={setCount} setStep={setStep} />
      <Menu count={count} />
    </div>
  );
}

function Header({ count, step, setCount, setStep }) {
  return (
    <>
      <div>
        <button onClick={() => setStep(step - 1)}>-</button>
        Step: {step}
        <button onClick={() => setStep(step + 1)}>+</button>
      </div>

      <div>
        <button onClick={() => setCount(count - step)}>-</button>
        Count: {count}
        <button onClick={() => setCount(count + step)}>+</button>
      </div>
    </>
  );
}

function Menu({ count }) {
  const date = new Date("october 14 2023");
  date.setDate(date.getDate() + count);
  if (count > 0) {
    return (
      <div>
        <p>
           {count} days from today is {date.toDateString()}{" "}
        </p>
      </div>
    );
  } else if (count == 0) {
    return (
      <div>
        <p>Today is {date.toDateString()} </p>
      </div>
    );
  }

  else 
  {
    return (
     <p>{-count} days before today was {date.toDateString()} </p>
    )
  }
}

export default App;
