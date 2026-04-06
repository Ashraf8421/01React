import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    name : 'Hitest',
    age: 25,
    address: {
      city: 'Jaipur',
      state:'Karnataka',
      country:'India'
    }
  }

  let newArr = [1,2,3,4,5,6,7,8,9]

  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3 rounded-md">
        Vite with Tailwind
      </h1>
      <Card
        username="hitesh"
        url="https://images.pexels.com/photos/18264716/pexels-photo-18264716.jpeg"
        myArr={newArr}
      />
      <Card username="json" post="Staff engineer" />
      <Card />
    </>
  );
}

export default App
