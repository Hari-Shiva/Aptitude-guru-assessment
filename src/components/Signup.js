import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('User');
    const [document, setDocument] = useState(null);

    const handleSignup = async () => {
        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);
        formData.append('role', role);
        formData.append('document', document);

        try {
            await axios.post('/api/auth/signup', formData);
            alert('Sign-up successful. Await admin approval.');
        } catch (error) {
            console.error("Sign-up failed", error.response);
        }
    };

    return (
        <div className="signup-form">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="User">User</option>
                <option value="Recruiter">Recruiter</option>
            </select>
            <input type="file" onChange={(e) => setDocument(e.target.files[0])} />
            <button onClick={handleSignup}>Sign Up</button>
        </div>
    );
};

export default Signup;
