import "./App.css";
import {
  SignInPage,
  LeadForm,
  AllLeads,
  AllQuotes,
  QuotationForm,
} from "./components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ContextProvider } from "./ContextApi";
function App() {
  return (
    <>
      <ContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<SignInPage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/leadform" element={<LeadForm />} />
            <Route path="/quotations" element={<QuotationForm />} />
            <Route path="/all-leads" element={<AllLeads />} />
            <Route path="/all-quotes" element={<AllQuotes />} />
          </Routes>
        </Router>
      </ContextProvider>
    </>
  );
}

export default App;
