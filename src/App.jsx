import './App.css'
import Counter from './conponents/Counter'
import Exam1 from './conponents/Exam1'
import Exam2 from './conponents/Exam2'
import Exam3 from './conponents/Exam3'


function App() {
  const user = {
    name: 'Alice',
    age: 21
  }

  return (
    <div>
      <Exam1 {...user}/>
      <Exam2 />
      <Exam3 />
    </div>
  )
}

export default App
