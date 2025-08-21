import React, { useState } from 'react';

function Testing() {
    const [isGreen, setIsGreen] = useState(true); // State to toggle condition
    const color = isGreen ? 'green' : 'yellow'; // Color based on condition

    const toggleColor = () => {
        setIsGreen(!isGreen); // Toggle the condition
    };

    return (
        <div style={{ backgroundColor: color, padding: '20px' }}>
            <h1>Testing</h1>
            <button onClick={toggleColor}>
                Toggle Color (Current: {color})
            </button>
        </div>
    );
}

export default Testing;