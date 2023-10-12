import './App.css'

function App() {

  return (
    
      <div className='container'>
        <Avatar/>
        <Introduction/>
        <Footer/>
      </div>
        
    
  )
}

function Avatar() {
  return (
    <div className='avatar'>
      <img src='https://images.pexels.com/photos/18710591/pexels-photo-18710591/free-photo-of-horse.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='image' />
    </div>
  )
}

function Introduction () {
  return (
    <div className='Introduction'>
      <h1>Horse D. Luffy</h1>
      <p>Full-stack web developer and teacher at Udemy. When not coding or preparing a course, I like to play board games, to cook (and eat), or to just enjoy the Portuguese sun at the beach.
      </p>
    </div>
  )
}

function Footer() {
  return (
    <footer>
      <span>React</span> <span>HTML+CSS</span>
      <br />
      <span>Javascript</span>
    </footer>
  )
}

export default App
