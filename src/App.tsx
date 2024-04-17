import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<h1>oi</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
