import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('https://ordina-backend.onrender.com/api/login/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('access', data.access);
        localStorage.setItem('refresh', data.refresh);

        navigate('/');
      } else {
        alert('Invalid credentials');
      }

    } catch (err) {
      console.error(err);
      alert('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">

      {/* LEFT SIDE */}
      <div className="auth-left">
        <h1>Ordina</h1>
        <p className="tagline">Organize your work. Simplify your life.</p>

        <ul className="features">
          <li>✔ Smart task management</li>
          <li>✔ Priority & category filters</li>
          <li>✔ Due date tracking</li>
          <li>✔ Clean & distraction-free UI</li>
        </ul>
      </div>

      {/* RIGHT SIDE */}
      <div className="auth-right">
        <div className="auth-card">

          <h2>Login</h2>

          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <p className="switch-text">
            New user? <Link to="/register">Create account</Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default Login;