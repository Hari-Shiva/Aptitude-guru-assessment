import React, { useState } from 'react';
import axios from 'axios';

const MFASetup = () => {
    const [mfaEnabled, setMfaEnabled] = useState(false);

    const handleMfaToggle = async () => {
        try {
            await axios.post('/api/auth/mfa-toggle', { mfaEnabled: !mfaEnabled });
            setMfaEnabled(!mfaEnabled);
        } catch (error) {
            console.error('Failed to toggle MFA', error.response);
        }
    };

    return (
        <div className="mfa-setup">
            <h2>Multi-Factor Authentication</h2>
            <label>
                <input type="checkbox" checked={mfaEnabled} onChange={handleMfaToggle} />
                Enable MFA
            </label>
        </div>
    );
};

export default MFASetup;
