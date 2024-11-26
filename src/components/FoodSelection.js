// src/components/FoodSelection.jsx
import { useState } from 'react';
function FoodSelection({ onSubmit }) {
    const categories = {
        carb: ["rice", "bread", "noodle", "potato"],
        protein: ["chicken", "egg", "salmon", "milk"],
        fiber: ["broccoli", "cabbage", "carrots", "green beans"]
    };

    const [selections, setSelections] = useState({
        carb: [],
        protein: [],
        fiber: []
    });

    const handleSelection = (category, item) => {
        setSelections(prev => ({
            ...prev,
            [category]: prev[category].includes(item)
                ? prev[category].filter(i => i !== item)
                : [...prev[category], item]
        }));
    };

    return (
        <div className="space-y-6">
            {Object.entries(categories).map(([category, items]) => (
                <div key={category} className="space-y-2">
                    <h3 className="text-lg font-semibold capitalize">{category}</h3>
                    <div className="grid grid-cols-2 gap-2">
                        {items.map((item) => (
                            <button
                                key={item}
                                className={`p-2 border rounded ${
                                    selections[category].includes(item) ? 'bg-blue-500 text-white' : ''
                                }`}
                                onClick={() => handleSelection(category, item)}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            ))}

            <button
                className="w-full bg-blue-500 text-white p-2 rounded"
                onClick={() => onSubmit(selections)}
                disabled={!Object.values(selections).every(arr => arr.length > 0)}
            >
                Generate Meal Plan
            </button>
        </div>
    );
}

export default FoodSelection;
