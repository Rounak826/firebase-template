import './App.css';
import AuthProvider from './Context/AuthContext';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import PrivateRoute from './PrivateRoute';
function App() {
  return (
    <AuthProvider >
      <div className="App">
        <Router>
          <Routes>
          <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>}
        />
            <Route path = '/signup' element={<Signup />} />
            <Route path = '/login' element={<Login />} />
          </Routes>
        </Router>
    </div>
    </AuthProvider>
    
  );
}

export default App;
