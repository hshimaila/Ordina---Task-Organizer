import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import TodoApp from './components/TodoApp';
import Profile from './pages/Profile';
import Login from './auth/Login';
import Register from './auth/Register';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import ChangePassword from './pages/ChangePassword';
import './styles/App.css';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Register />} />

          <Route
            path="/"
            element={
              <PrivateRoute>
                <TodoApp />
              </PrivateRoute>
            }
          />

          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />

          <Route
            path="/change-password"
            element={
              <PrivateRoute>
                <ChangePassword />
              </PrivateRoute>
            }
          />
        </Routes>

      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;