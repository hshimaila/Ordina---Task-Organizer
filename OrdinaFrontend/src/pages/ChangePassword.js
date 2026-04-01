import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api';

function ChangePassword() {
  const navigate = useNavigate();

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleChangePassword = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post('/change-password/', {
        old_password: oldPassword,
        new_password: newPassword
      });

      alert('Password changed successfully 🔐');
      navigate('/profile');

    } catch (err) {
      alert(err.response?.data?.error || 'Error changing password');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-right" style={{ margin: 'auto' }}>
        <div className="auth-card">
          <h2>Change Password</h2>

          <form onSubmit={handleChangePassword}>
            <input
              type="password"
              placeholder="Old Password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
            />

            <input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />

            <button type="submit">Update Password</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;