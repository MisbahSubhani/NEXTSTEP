import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { InternshipPage } from "./pages/InternshipPage";
import { SignUp } from "./pages/Signup";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Toaster } from 'react-hot-toast';
import { HRSignUp } from './pages/HRSignup';
import { HRLogin } from './pages/HRLogin';

function App() {
  return (
    <>

      <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Internship" element={<InternshipPage />} />
          <Route path="/HR/Signup" element={<HRSignUp />} />
          <Route path="/HR/Login" element={<HRLogin />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App