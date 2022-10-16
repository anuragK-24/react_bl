import TopBar from "./components/topbar/TopBar";
import Home from "./../src/pages/home/Home";
import Write from "./../src/pages/write/Write";
import Single from "./pages/single/Single";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// In react-router-dom v6, "Switch" is replaced by routes "Routes". You need to update the import from

function App() {
  const user = false;
  return (
    <Router>
      <TopBar/> 
      
      <Routes>
        <Route path="/" element={<Home/>}/>

        <Route path="/register" element={user ? <Home/> :<Register/>}/>

        <Route path="/login" element={user ? <Home/> : <Login/>}/>

        <Route path="/write" element={user ? <Write/> : <Register/> }/>

        <Route path="/settings" element={user ? <Settings/> : <Register/> }/>

        <Route path="/post/:postID" element={<Single/>}/>

      </Routes>
    </Router>
   );
}
  
export default App;
