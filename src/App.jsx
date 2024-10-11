import './App.css'
import { SignInPage, LeadForm, AllLeads, AllQuotes,QuotationForm } from './components'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/signup" element={<SignInPage/>}/>
        <Route path="/leadform" element={<LeadForm/>}/>
        <Route path="/quotations" element={<QuotationForm/>}/>
        <Route path="/all-leads" element={<AllLeads/>}/>
        <Route path="/all-quotes" element={<AllQuotes/>}/>
      </Routes>
    </Router>
     </>
  )
}

export default App
