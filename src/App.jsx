
import './App.css'
import Counter from './components/Counter'
import Form from './components/Form'
// import TextCard from './components/TextArea'
import RichText from './components/RichText'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <div className='Dashboard'>
      
      <Form />
      <Counter/>
      
      
    </div>
    <div className='RichText'>
    <RichText />
    </div>
    </>
  )
}

export default App
