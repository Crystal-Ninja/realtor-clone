import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./pages/ Home"
import Profile from "./pages/Profile"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import ForgotPassword from "./pages/ForgotPassword"
import Offers from "./pages/Offers"
import Header from "./components/Header";
function App() {
  return (
    <div >                   
        <Router>
          <Header/>
          <Routes>
          <Route path="/" element={<Home></Home>}/>
          <Route path="/profile" element={<Profile></Profile>}/>
          <Route path="/sign-in" element={<SignIn></SignIn>}/>
          <Route path="/sign-up" element={<SignUp></SignUp>}/>
          <Route path="/forgot-password" element={<ForgotPassword></ForgotPassword>}/>
          <Route path="/offers
          " element={<Offers></Offers>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
