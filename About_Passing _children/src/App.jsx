import { useState } from 'react'
import Container from "./Components/Container"

function App() {
  const [count, setCount] = useState(0)

  return (
   <Container >
    <h1>Welcome to My App</h1>
    <p>This content is  passed as children to the Container Component</p>
   </Container>
  )
}

export default App
