import {
    BrowserRouter,
    Route,
    Routes,
  } from "react-router-dom";
  
  

  

  import { Home} from "./pages/Home";
  import { Signin } from "./pages/Signin";
  import {InternshipPage } from "./pages/InternshipPage";
 import { SignUp } from "./pages/Signup";
  import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Toaster } from 'react-hot-toast';
import { Dashboard } from "./pages/Dashboard";
  function App() {
    return (
      <>

<Toaster position="top-center" reverseOrder={false} />
         <BrowserRouter>
          <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/Signin" element={<Signin />} /> 
          <Route path="/Signup" element={<SignUp />} /> 
          <Route path="/About" element={<About />} /> 
          <Route path="/Contact" element={<Contact />} /> 
          <Route path="/dashboard" element={<Dashboard />} /> 
         
         
          <Route path="/internship" element={<InternshipPage />} /> 
            
          
  
          </Routes>
        </BrowserRouter>
      </>
    )
  }
  
  export default App