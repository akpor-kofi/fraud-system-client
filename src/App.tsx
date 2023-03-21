import {useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() :JSX.Element {
  const [name, setName] = useState("")

    function handleNameChange(e: any) {
      setName(e.target.value)
    }

    function printName(e: any) {
      e.preventDefault()

      console.log(name)
    }

  return (
        <div>

            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            <form onSubmit={printName}>
                <input type="text" name="name" onChange={handleNameChange}/>
                <input type="text" name="email"/>
                <input type="text" name="password"/>
                <input type="text" name="confirm-password"/>

                <input type="submit"/>
            </form>
        </div>
  )
}

export default App
