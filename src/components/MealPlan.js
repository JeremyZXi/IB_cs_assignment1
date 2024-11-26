// src/components/MealPlan.jsx
function MealPlan({ calories, bmr, choices }) {
    // Food calorie data (calories per 100g)
    const foodData = {
        carb: { rice: 130, bread: 265, noodle: 138, potato: 77 },
        protein: { chicken: 165, egg: 155, salmon: 206, milk: 61 },
        fiber: { broccoli: 34, cabbage: 25, carrots: 41, "green beans": 31 }
    };

    // Calculate portions
    const calculatePortions = () => {
        const portions = {};
        const categoryCalories = {
            carb: calories * 0.45,
            protein: calories * 0.25,
            fiber: calories * 0.3
        };

        Object.entries(choices).forEach(([category, items]) => {
            const caloriesPerItem = categoryCalories[category] / items.length;

            items.forEach(item => {
                const amount = (caloriesPerItem / foodData[category][item]) * 100;
                portions[item] = Math.round(amount);
            });
        });

        return portions;
    };

    const portions = calculatePortions();

    return (
        <div className="space-y-4">
            <h2 className="text-xl font-bold">Your Meal Plan</h2>
            <div>
                <p>Target Calories: {Math.round(calories)}</p>
                <p>BMR: {Math.round(bmr)}</p>
            </div>

            <div className="space-y-4">
                {Object.entries(choices).map(([category, items]) => (
                    <div key={category} className="border p-4 rounded">
                        <h3 className="font-semibold capitalize">{category}</h3>
                        <ul>
                            {items.map(item => (
                                <li key={item}>
                                    {item}: {portions[item]}g
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MealPlan;
