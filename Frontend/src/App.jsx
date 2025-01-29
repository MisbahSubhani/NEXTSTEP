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
  
  
  function App() {
    return (
      <>
         <BrowserRouter>
          <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/Signin" element={<Signin />} /> 
          <Route path="/Signup" element={<SignUp />} /> 
          <Route path="/About" element={<About />} /> 
          <Route path="/Contact" element={<Contact />} /> 
         
        
          <Route path="/internship" element={<InternshipPage />} /> 
            
          
  
          </Routes>
        </BrowserRouter>
      </>
    )
  }
  
  export default App