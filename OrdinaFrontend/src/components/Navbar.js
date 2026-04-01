import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { jwtDecode } from 'jwt-decode';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/ordinaLogo.png';

function Navbar() {
    const { isDarkMode, toggleTheme } = useTheme();
    const [username, setUsername] = useState('Guest');
    const [showDropdown, setShowDropdown] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const token = localStorage.getItem('access');

    useEffect(() => {
        if (token) {
            try {
                const decoded = jwtDecode(token);
                setUsername(decoded.username || 'User');
            } catch {
                setUsername('User');
            }
        } else {
            setUsername('Guest');
        }
    }, [location]);

    const handleLogout = () => {
        localStorage.clear();
        setUsername('Guest');
        navigate('/login');
    };

    const isProfilePage = location.pathname === '/profile';

    return (
        <div className="navbar">
            <img
                src={logo}
                alt="Ordina Logo"
                className="logo-img"
                onClick={() => {
                    if (token) navigate('/');
                    else navigate('/login');
                }}
            />

            <div className="nav-right">
                {!token ? (
                    <button
                        className="signup-btn"
                        onClick={() => navigate('/register')}
                    >
                        Sign Up
                    </button>
                ) : (
                    <>
                        <button className="theme-btn" onClick={toggleTheme}>
                            {isDarkMode ? '☀️' : '🌙'}
                        </button>

                        {isProfilePage ? (
                            <button
                                className="signup-btn"
                                onClick={() => navigate('/')}
                            >
                                Home
                            </button>
                        ) : (
                            <div
                                className="user-section"
                                onClick={() => setShowDropdown(!showDropdown)}
                            >
                                👤 {username}

                                {showDropdown && (
                                    <div className="dropdown">
                                        <div
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                navigate('/profile');
                                            }}
                                        >
                                            Profile
                                        </div>

                                        <div
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleLogout();
                                            }}
                                            style={{ color: 'red' }}
                                        >
                                            Logout
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

export default Navbar;