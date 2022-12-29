import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { Navigate, Route, Routes } from "react-router-dom"

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <Routes>
      <Route path="/" element={<h1>Hi </h1>} />
      <Route path="/new" element={<h1>New</h1>} />
      <Route path=":id">
        <Route index element={<h1>Show</h1>} />
        <Route path="edit" element={<h1>Show</h1>} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
export default App
