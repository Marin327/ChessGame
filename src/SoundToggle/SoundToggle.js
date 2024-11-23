// SoundToggle.js
import React, { useState } from 'react';
import '../App.css';


const SoundToggle = () => {
    const [soundEnabled, setSoundEnabled] = useState(true);

    const toggleSound = () => {
        setSoundEnabled(!soundEnabled);
    };

    return (
        <div className="sound-toggle">
            <button onClick={toggleSound}>
                {soundEnabled ? 'Mute Sound' : 'Enable Sound'}
            </button>
        </div>
    );
};

export default SoundToggle;
