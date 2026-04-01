import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { jwtDecode } from 'jwt-decode';
import API from '../api';

import {
  PieChart, Pie, Cell,
  BarChart, Bar,
  XAxis, YAxis, Tooltip, ResponsiveContainer
} from 'recharts';

function Profile() {
  const navigate = useNavigate();
  const { isDarkMode, toggleTheme } = useTheme();

  const [username, setUsername] = useState('');
  const [stats, setStats] = useState({
    total: 0,
    completed: 0,
    streak: 0
  });

  useEffect(() => {
    const token = localStorage.getItem('access');

    if (!token) {
      navigate('/login');
      return;
    }

    try {
      const decoded = jwtDecode(token);
      setUsername(decoded.username);
    } catch {
      navigate('/login');
    }

    fetchStats();
  }, [navigate]);

  const fetchStats = async () => {
    try {
      const res = await API.get('/tasks/stats/');
      setStats(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const completed = stats.completed;
  const pending = stats.total - stats.completed;

  const pieData = [
    { name: 'Completed', value: completed },
    { name: 'Pending', value: pending },
  ];

  const barData = [
    { name: 'Tasks', completed: stats.completed, pending: pending }
  ];

  const COLORS = ['#4f46e5', '#e5e7eb'];

  const getInitial = () => {
    return username ? username.charAt(0).toUpperCase() : '?';
  };

  return (
    <div className={`profile-dashboard ${isDarkMode ? 'dark' : 'light'}`}>

      {/* LEFT SIDE */}
      <div className="profile-left">
        <div className="profile-card">

          <div className="avatar">{getInitial()}</div>
          <h2>{username}</h2>

          <div className="stats-box">
            <div>
              <strong>{stats.total}</strong>
              <p>Total</p>
            </div>
            <div>
              <strong>{stats.completed}</strong>
              <p>Completed</p>
            </div>
            <div>
              <strong>{stats.streak}</strong>
              <p>Streak</p>
            </div>
          </div>
          <div>
            <button onClick={() => navigate('/change-password')}
              className='password-btn'>
              Change Password
            </button>
          </div>


          <div>
            <button onClick={() => {
              localStorage.clear();
              navigate('/login');
            }} className='logout-btn'>
              Logout
            </button>
          </div>

        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="profile-right">

        {/* PIE CHART */}
        <div className="chart-card">
          <h3>Task Completion</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                outerRadius={80}
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* BAR CHART */}
        <div className="chart-card">
          <h3>Overview</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={barData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="completed" fill="#c3da68" />
              <Bar dataKey="pending" fill="#b31b1b" />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>

    </div>
  );
}

export default Profile;