import { BrowserRouter,Routes , Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Signin from "./pages/Signin"
import SignUp from "./pages/SignUp"
import Profile from "./pages/Profile"

export default function App() {
  return <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/sing-in" element={<Signin/>}></Route>
        <Route path="/sign-up" element={<SignUp/>}></Route>
        <Route path="/Profile" element={<Profile/>}></Route>
      </Routes>
    </BrowserRouter> 
}
