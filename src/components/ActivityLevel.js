// src/components/ActivityLevel.jsx
import { useState } from 'react';
function ActivityLevel({ onSubmit }) {
    const levels = [
        { id: 1, name: "Basic metabolic rate", factor: 1.0 },
        { id: 2, name: "Sedentary", factor: 1.2 },
        { id: 3, name: "Light", factor: 1.325 },
        { id: 4, name: "Moderate", factor: 1.45 },
        { id: 5, name: "Active", factor: 1.575 },
        { id: 6, name: "Very active", factor: 1.7 },
        { id: 7, name: "Extra active", factor: 1.9 }
    ];

    return (
        <div className="space-y-4">
            <h2 className="text-xl">Select Your Activity Level</h2>
            {levels.map((level) => (
                <button
                    key={level.id}
                    className="block w-full p-4 border rounded"
                    onClick={() => onSubmit(level.factor)}
                >
                    {level.name}
                </button>
            ))}
        </div>
    );
}

export default ActivityLevel;
