import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleLogin = async () => {
        try {
            const res = await axios.post('/api/auth/login', { email, password });
            const { token, role } = res.data;
            localStorage.setItem('authToken', token);

            if (role === 'Admin') {
                history.push('/admin');
            } else if (role === 'Recruiter') {
                history.push('/recruiter');
            } else {
                history.push('/user');
            }
        } catch (error) {
            console.error("Login failed", error.response);
        }
    };

    return (
        <div className="login-form">
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
