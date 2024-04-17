import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageShowCompany from "./pages/PageShowCompany";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<PageShowCompany/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
