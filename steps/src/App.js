import { useState } from 'react';
import './index.css'

function App() {
  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];

function next () {
  if(step<3)
  setStep((s) =>s+1)
}

function previous () {
  if(step>1)
  setStep((s) =>s-1)
}

function handleView() {
  setView( (view) => !view)
}

  const [step, setStep] = useState(1)
  const [view, setView] =  useState(true)

  return (
    <>  
            <button onClick={handleView} className='close'>&times;</button>


    {view ? <div className="steps">
      <div  className="numbers">
        <div className={step>=1 ? 'active' : ""} >1</div>
        <div className={step>=2 ? 'active' : ""} >2</div>
        <div className={step>=3 ? 'active' : ""} >3</div>
        </div>
      
        <p className="message">Step: {step} {messages[step-1]}</p>

        <div className="buttons" >
        <button onClick={previous} style={{backgroundColor: '#7950f2',color: '#fff' }}>Previous</button>
        <button onClick={next} style={{backgroundColor: '#7950f2',color: '#fff' }}>Next</button>
       

        </div>
    </div> : null}
    </>


    
  );
}

export default App;
