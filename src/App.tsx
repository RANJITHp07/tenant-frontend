
import Notfoundpage from "./pages/404page";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import SigninPage from "./pages/SigninPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
      <Routes>
      <Route path="/signup"  element={<SigninPage/>} />
      <Route path="/login"  element={<LoginPage/>} />
      <Route path="/"  element={<Homepage/>} />
      <Route path="*"  element={<Notfoundpage/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
