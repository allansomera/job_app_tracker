import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { Navigate, Route, Routes } from "react-router-dom"
import { Container } from "react-bootstrap"
import NewNote from "./components/new-note/NewNote"

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <Container>
      <Routes>
        <Route path="/" element={<h1>Hi </h1>} />
        <Route path="/new" element={<NewNote />} />
        <Route path="/:id">
          <Route index element={<h1>Show</h1>} />
          <Route path="edit" element={<h1>Edit</h1>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Container>
  )
}
export default App
